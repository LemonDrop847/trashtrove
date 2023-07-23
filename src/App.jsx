import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";`
import Upload from "./pages/Upload";
import Middle from "./pages/Middle";
import Display from "./pages/Display";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/middle" element={<Middle/>}/>
        <Route exact path="/display" element={<Display/>} />
      </Routes>
    </Router>
  );
}

export default App;
