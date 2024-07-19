import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './components/style.css'
import Waitlist from './components/Waitlist';
import Doc from './components/Doc';
import Mint from './components/Mint';
import Hub from './components/Hub';


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
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
