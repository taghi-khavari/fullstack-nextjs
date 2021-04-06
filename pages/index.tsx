import Banner from "../components/Home/Banner";
import Contact from "../components/Home/Contact";
import Content from "../components/Home/Content";
import Footer from "../components/Home/Footer";
import Partners from "../components/Home/Partners";
import People from "../components/Home/People";
import Testimonials from "../components/Home/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner />
      <Content />
      <Testimonials />
      <People />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}
