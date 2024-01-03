import { Container } from "react-bootstrap"
import Interests from "../Interests";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import NavBar from "../NavBar";
import Particle from "./Particle";

function Home() {
    return (
        <Container>
            <Particle />
            <div id="home" className="home_style">
                <h1 className="heading">
                    Hello, my name is
                </h1>
                <h1 className="header-name">
                    Apoorv Sharma
                </h1>
                <div>
                    <h1 className="heading">
                        I am a 
                    </h1>
                    <div style={{ textAlign: "left", "padding-left": "75px", fontSize: "28px" }}>
                        <Interests/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Home; 