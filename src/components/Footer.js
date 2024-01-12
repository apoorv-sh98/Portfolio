import { Copyright } from "@mui/icons-material";
import { Container, Col, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Footer.css"

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <Container 
            fluid
            className="footer"
            fixed="bottom"

        >
            <ul className="social_links">
              <li className="social_icon">
                <a
                  href="https://github.com/apoorv-sh98"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                    <AiFillGithub />
                </a>
              </li>
              <li className="social_icon">
                <a
                  href="https://www.linkedin.com/in/apoorv-sh98/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                    <FaLinkedinIn />
                </a>
              </li>
              <li className="social_icon">
                <a
                  href="https://leetcode.com/apoorv-sh98/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                    <SiLeetcode />
                </a>
              </li>
            </ul>
            <h3 className="footer_text">
                © {year} Apoorv Sharma. All rights reserved.
            </h3>
        </Container>
    )
}

export default Footer;