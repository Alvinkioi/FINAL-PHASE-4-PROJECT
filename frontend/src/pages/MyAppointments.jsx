import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function MyAppointments({ user }) {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`my_appointments/${user ? user?.id : null}`)
      .then((res) => res.json())
      .then((data) => setAppointments(data.appointments));
  }, [user?.id]);

  if (!user?.username) {
    return (
      <div className="error-card">
        <div className="error-wrap">
          <p className="error-message">
            You have to be signed in to see your appointments!
          </p>

          <Link to="/login">
            <button className="btn erro-btn">Proceed to login page</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="appheading">My Appointments</h1>
      {appointments.map((appoinment) => (
        <ul className="appointment">
          <li>
            <span className="apptitle">Service 💼: </span>
            {appoinment.service}
          </li>
          <li>
            <span className="apptitle">Date 🗓️: </span>
            {appoinment.date}
          </li>
          <li>
            <span className="apptitle">Time ⏰: </span>
            {appoinment.time}
          </li>
          <li>
            <span className="apptitle">Extra Information 📩 : </span>
            {appoinment.extra_information}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default MyAppointments;
