import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Services from "./components/Services"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

<Route></Route>
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
