import "./App.css";
import Home from "./Components/Home/Home";
import Tp_pia from "./Components/Login/tp_pia";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App bg-#F9F1D9">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tp_pia" element={<Tp_pia />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
