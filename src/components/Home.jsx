import "./style.css";
import Container from "./Container";
import Section from "./Section";
import Footer from "./Footer";
import FAQ from "./FAQ";

const Home = () => {
 return (
  <div>
   <Container />
   <div className="home">
    <Section />
    <FAQ />
   </div>
   <Footer />
  </div>
 );
};

export default Home;
