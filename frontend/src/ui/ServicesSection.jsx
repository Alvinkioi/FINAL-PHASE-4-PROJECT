import { Link } from "react-router-dom";

function ServicesSection() {
  return (
    <div className="services_section">
      <div className="services_header">
        <h1 className="heading">Beauty</h1>
        <h1 className="sub-heading">WITHIN REACH</h1>
      </div>

      <div className="all_services">
        <div className="service">
          <span>💇‍♀️</span>
          <h1>Hair Studio</h1>
          <p>
            We are known for our quality human hair pieces. At our our salon you
            can get bundles weave or get a customised wig made specifically the
            way you want it. Incase you need a unit dyed or revamped we are here
            to help you.
          </p>
          <Link to="/hair_studio">
            <button className="service_btn">See All &rarr;</button>
          </Link>
        </div>
        <div className="service">
          <span>💄</span>
          <h1>Make Up</h1>
          <p>
            Let the makeup artists at Phoina beauty create a particular look for
            any occasion that will last in your perfect picture which will last
            in your memories forever. We also offer bridal services packages
            depending on your needs.
          </p>
          <Link to="/make_up">
            <button className="service_btn">See All &rarr;</button>
          </Link>
        </div>
        <div className="service">
          <span>💅</span>
          <h1>Nail Bar</h1>
          <p>
            Welcome to DAMIC beauty where we offer you a range of beauty
            services to fit your needs. From hair styling to manicures pedicures
            our highly professional team will deliver a luxurious experience
            when it comes to beauty matters.
          </p>
          <Link to="/nail_bar">
            <button className="service_btn">See All &rarr;</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
