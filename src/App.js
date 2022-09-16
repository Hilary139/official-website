import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import XendSecure from "./components/Xend/XendSecure";
import Eivolv from "./components/Eivolv/Eivolv";
import HowItWorks from "./components/Xend/HowItWorks";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Eivolv /> } />
          <Route path="/xend-secure" element={<XendSecure />} />
          <Route path="/xend-secure/how-it-works" element={  <HowItWorks /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
