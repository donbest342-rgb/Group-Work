
// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Header from './Component/Nav.jsx'  // ← Your Header
import Login from './Tools/Login.jsx'
import Home from './Pages/Home.jsx'
import Dashboard from './Tools/Dashboardpage.jsx'
import Destinatoin from "./Pages/Destinationspage.jsx"
import Hotels from "./Pages/Hotels.jsx"
import PlanTravel from "./Pages/PlanTravle.jsx"
import Travelguide from "./Pages/Travelguide.jsx"
import DestinationEnd from "./Pages/DestinationEnd.jsx"
import Signup from "./Tools/Signup.jsx"
import Edituser from './Tools/Edituser.jsx'
import Payments from './Tools/Payment.jsx'

function App() {
  return (
    <>
      <Header />        {/* ← NOW it's inside AuthProvider! */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/destination" element={<Destinatoin/>} />
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/plantravel" element={<PlanTravel/>} />
        <Route path="/travelguide" element={<Travelguide/>} />
        <Route path="/destination/book" element={<DestinationEnd/>} />
        <Route path="/signup" element={< Signup />}  />
        <Route path="/dashboard/edituser" element={< Edituser />}  />
        <Route path="/dashboard/payments" element={< Payments />}  />
      </Routes>
    </>
  )
}

export default App
