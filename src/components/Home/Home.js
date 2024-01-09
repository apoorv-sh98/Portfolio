import { Container } from "react-bootstrap"
import Interests from "../Interests";
import About from "../About";
import "./Home.css";

function Home() {
    return (
        <>
            <Container className="home_style">
                <div id="home" className="home_style_name">
                    <span className="heading">
                        Hi, my name is
                    </span>
                    <h1 className="header-name">
                        Apoorv Sharma
                    </h1>
                    <h1 className="header_text">
                        I like problem solving.
                    </h1>
                    <hr className="landing__hr" />
                    <div>
                        <h1 className="header_text">
                            I am a 
                        </h1>
                        <div style={{ textAlign: "center", fontSize: "26px", fontFamily: "Fira Code, monospace" }}>
                            <Interests/>
                        </div>
                    </div>
                </div>
            </Container>
            <About />
        </>
    )
}

export default Home; 