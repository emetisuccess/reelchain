import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Waitlist from './components/Waitlist';
import Doc from './components/Doc';
import Mint from './components/Mint';
import Hub from './components/Hub';
import Legal from './components/Legal';
import Problem from './components/Problem';
import Technical from './components/Technical';
import Tokenomics from './components/Tokenomics';
import UseCase from './components/UseCase';
import './components/style.css'
import Roadmap from './components/Roadmap';
import KeyFeatures from './components/KeyFeatures';
import Conclusion from './components/Conclusion';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hub' element={<Hub />} />
        <Route path='/mint' element={<Mint />} />
        <Route path='/waitlist' element={<Waitlist />} />
        <Route path='/doc' element={<Doc />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='/conclusion' element={<Conclusion />} />
        <Route path='/problem-statement' element={<Problem />} />
        <Route path='/key-features' element={<KeyFeatures />} />
        <Route path='/technical-architecture' element={<Technical />} />
        <Route path='/tokenomics' element={<Tokenomics />} />
        <Route path='/use-case' element={<UseCase />} />
        <Route path='/road-map' element={<Roadmap />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
