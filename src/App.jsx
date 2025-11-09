import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Destinatoin from "./Pages/Destination.jsx"
import Hotels from "./Pages/Hotels.jsx"
import PlanTravel from "./Pages/PlanTravle.jsx"
import Travelguide from "./Pages/Travelguide.jsx"
import Nav from "./Component/Nav.jsx"
import Footer from "./Component/Footer.jsx"

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/destination" element={<Destinatoin/>} />
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/plantravel" element={<PlanTravel/>} />
        <Route path="/travelguide" element={<Travelguide/>} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
