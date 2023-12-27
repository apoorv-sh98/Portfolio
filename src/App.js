import logo from './logo.svg';
import './App.css';
import './style.css';
import Home from "../src/components/Home"
import NavBar from "../src/components/NavBar"
import Projects from "../src/components/Projects"
import WorkEx from "../src/components/WorkEx"
import Blog from "../src/components/Blog"
import BucketList from "../src/components/BucketList"
import Resume from "../src/components/Resume"
import Footer from "../src/components/Footer"
import ScrollToTop from "./components/ScrollToTop";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/workEx" element={<WorkEx />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/bucketList2024" element={<BucketList />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
