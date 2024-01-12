
import './App.css'
import Header from "./Pages/Header/Header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Portfolio from './Pages/Portfolio/Portfolio';
import About from './Pages/About/About';
import Home from './Pages/Home/Home'

function App() {

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />


      </Routes>
    </Router>
  )
}

export default App
