import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HairStudio() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/hair_services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <div>
        <div className="banner_container page_banner_container">
          <div className="site_tagline">
            <h1 className="tagline">Hair Studio</h1>
          </div>
          <img
            src="https://images.unsplash.com/photo-1564141696939-9eb6e957ccfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFpcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="Banner"
            className="banner page_banner"
          />
        </div>

        <div className="services">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div>
                <img
                  src={service.image}
                  alt="service"
                  className="service-image"
                />
              </div>
              <div className="services-deatils">
                <h1 className="services-title">{service.title}</h1>
                <p className="services-description">{service.description}</p>
                <p className="services-price">Ksh {service.price} /=</p>
                <Link to="/book_appointment">
                  <button className="btn">Book Appointment</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HairStudio;
