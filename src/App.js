import "./styled/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Services from "./pages/Services/Services";
import ServiceArea from "./pages/ServiceArea/ServiceArea";
import NavBar from "./Shared/NavBar/NavBar";
import Footer from "./Shared/Footer/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import Contact from "./pages/Contact/Contact";
import Pricing from "./pages/Pricing/Pricing";
import FbChat from "./Shared/FbChat/FbChat";
function App() {
  return (
    <div className="App">
      {/* <h1>In the name of Allah</h1> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/servicesArea" element={<ServiceArea />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <FbChat />
      </Router>
    </div>
  );
}

export default App;
