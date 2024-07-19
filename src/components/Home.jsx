import './style.css'
import Container from './Container'
import Section from './Section'
import Testimonials from './Testimonials'
import FAQ from './FAQ'

const Home = () => {
  return (
    <div>
      <Container />
      <div className='home'>
        <Section />
        <Testimonials />
        <FAQ />
      </div>
    </div>
  )
}

export default Home