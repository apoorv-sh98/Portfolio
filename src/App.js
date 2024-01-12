import logo from './logo.svg';
import './App.css';
import './style.css';
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"
import Projects from "./components/Projects/Projects"
import Timeline from "./components/Timeline/Timeline"
import Blog from "./components/Blog/Blog"
import BucketList from "./components/BucketList"
import Resume from "./components/Resume/Resume"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop";
import Particle from "./components/Home/Particle";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Typewriter from "typewriter-effect";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Particle />
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Timeline" element={<Timeline />} />
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
