import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Upload from "./pages/Upload";
import Display from "./pages/Display";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes> */}
      {/* <Upload />  */}
      <Display /> 
    </Router>
  );
}

export default App;
