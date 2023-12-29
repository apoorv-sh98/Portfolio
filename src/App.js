import logo from './logo.svg';
import './App.css';
import './style.css';
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects/Projects"
import WorkEx from "./components/WorkEx/WorkEx"
import Blog from "./components/Blog/Blog"
import BucketList from "./components/BucketList"
import Resume from "./components/Resume/Resume"
import Footer from "./components/Footer"
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
