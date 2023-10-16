import { useState } from "react";
import Calendar from "react-calendar";
import { Link, useNavigate } from "react-router-dom";

function Appointment({ user }) {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [time, setTime] = useState(null);
  const [info, setInfo] = useState(false);
  const [extra_information, setExtra_information] = useState("");
  const [service, setservice] = useState("");

  const navigate = useNavigate();

  if (!user?.username) {
    return (
      <div className="error-card">
        <div className="error-wrap">
          <p className="error-message">
            😲 You Must be logged in to book an appointment!
          </p>

          <Link to="/login">
            <button className="btn erro-btn">Proceed to login page</button>
          </Link>
        </div>
      </div>
    );
  }

  function postAppointment(data) {
    fetch("/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          alert("Failed to create appointment");
        } else {
          alert(`Appointment booked successfully!`);
          navigate("/my_appointments");
        }
      })
      .then((data) => console.log(data));
  }

  const openTimes = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const Services = [
    "WASH & BLOW DRY",
    "HAIR RELAXING & TREATMENT",
    "WEAVING AND WIG INSTALLATION",
    "WIG WASHING AND REVAMPING",
    "BRAIDING",
    "STYLING & BRIDAL",
    "Makeup Application",
    "Bridal Makeup",
    "MANICURE & PEDICURE",
    "NAILS",
  ];

  function handleSubmit(e) {
    e.preventDefault();

    if (!date) {
      alert("Date cannot be empty!");
      return;
    }

    if (!service) {
      alert("You must choose a service!");
      return;
    }

    if (!time) {
      alert("Pick a suitable time for the appointment!");
      return;
    }

    const formattedDate = date.toISOString().split("T")[0];

    const data = {
      date: formattedDate,
      service,
      time,
      extra_information,
    };

    postAppointment(data);

    setDate(new Date());
    setShowTime(false);
    setTime(null);
    setInfo(false);
    setExtra_information("");
    setservice("");
  }

  function displayInfo(e) {
    setInfo(true);
    setTime(e.target.value);
  }

  const handleChange = (e) => setExtra_information(e.target.value);

  const handleServiceClick = (serv) => {
    setservice(serv);
  };

  return (
    <div className="appointment-form">
      <h1 className="calendar-header">BOOK AN APPOINTMENT NOW!</h1>
      <form onSubmit={handleSubmit}>
        <div className="calendar-container">
          <h2 className="apph2">Pick a date</h2>
          <Calendar
            onChange={setDate}
            value={date}
            onClickDay={() => setShowTime(true)}
            className="react-calendar"
          />
        </div>

        {date.length > 0 ? (
          <p className="appointment-info">
            <span>Appointment Date:</span> {date.toDateString()}
          </p>
        ) : null}

        <h2 className="apph2">Pick a time</h2>
        <div className="time-selector">
          {openTimes.map((times) => {
            return (
              <div key={times}>
                <input
                  type="button"
                  onClick={(e) => displayInfo(e)}
                  value={times}
                  className="time-button"
                />
              </div>
            );
          })}
          {info ? (
            <p className="appointment-info">
              Your appointment is scheduled for {time} on {date.toDateString()}
            </p>
          ) : null}
        </div>

        <div className="additional-info-form">
          <h2 className="apph2">Select a service: </h2>
          {Services.map((serv) => (
            <div key={serv}>
              <input
                type="radio"
                id={serv}
                name="services"
                value={serv}
                onChange={() => handleServiceClick(serv)}
                checked={service === serv}
                className="service-radio"
              />
              <label htmlFor={serv} className="service-name">
                {" "}
                {serv}
              </label>
            </div>
          ))}
        </div>

        <div className="additional-info-form">
          <h2 htmlFor="extra-info" className="info-title apph2">
            Any additional personalized info (Optional):
          </h2>
          <br />
          <textarea
            type="text"
            id="extra-info"
            value={extra_information}
            onChange={handleChange}
          />

          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Appointment;
