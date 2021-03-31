import Banner from "./Banner";
import Contact from "./Contact";
import Content from "./Content";
import Footer from "./Footer";
import Partners from "./Partners";
import People from "./People";
import Testimonials from "./Testimonials";

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
