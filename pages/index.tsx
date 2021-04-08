import { GetStaticProps } from "next";
import Banner from "../components/Home/Banner";
import Contact from "../components/Home/Contact";
import Content from "../components/Home/Content";
import Footer from "../components/Home/Footer";
import Partners from "../components/Home/Partners";
import People from "../components/Home/People";
import Testimonials from "../components/Home/Testimonials";
import { getDB } from "../data/backend-util";
import { IPerson } from "../types/model";

interface IProps {
  peoples: IPerson[];
}
export default function Home(props: IProps) {
  const { peoples } = props;
  return (
    <div>
      <Banner />
      <Content />
      <Testimonials />
      <People peoples={peoples} />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = getDB();
  if (data) {
    console.log("data Is ", data);
    const peoples = data?.peoples;
    return {
      props: {
        peoples,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};
