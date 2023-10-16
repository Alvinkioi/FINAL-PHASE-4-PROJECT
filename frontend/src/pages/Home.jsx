import AppointmentSection from "../ui/AppointmentSection";
import Banner from "../ui/Banner";
import Gallery from "../ui/Gallery";
import ServicesSection from "../ui/ServicesSection";

function Home({ user }) {
  return (
    <>
      <Banner />
      <ServicesSection />
      <Gallery />
      <AppointmentSection user={user} />
    </>
  );
}

export default Home;
