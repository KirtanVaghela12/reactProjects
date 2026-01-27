import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import { Route,Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Quotes from "./pages/Quotes";
import Contact from "./pages/Contact";

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
