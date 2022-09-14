import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import XendSecure from "./components/Xend/XendSecure";
import Eivolv from "./components/Eivolv/Eivolv";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Eivolv /> } />
          <Route path="/xend-secure" element={<XendSecure />} />
        </Routes>

      </Router>
 
    </>
  );
}

export default App;
