import "./App.css";
import NavBar from "./components/NavBar";
import About from "./screens/About";
import Contact from "./screens/Contact"; 
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes> 
        <Footer/>
      </Router> 
    </div>
  );
}

export default App;
