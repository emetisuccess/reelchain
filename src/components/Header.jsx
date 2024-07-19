import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <section className="header_section" style={{ paddingTop: '10px' }}>
      <Navbar />
      <Hero />
    </section>
  )
}

export default Header