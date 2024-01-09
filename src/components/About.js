import React, {useEffect} from 'react';
import Aos from "aos";

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    
    return(
        <div>
            <section id="about" className="about">
                <div data-aos="fade-right" className="about__text">
                    <h2 className="about__heading">About Me</h2>
                    <p className="about__body">
                    Hello, My name is Apoorv Sharma and I am a recent graduate of masters in Computer Science from{" "}
                    <span className="about__specialText">University of Rochester</span>.
                    <br />
                    I have previously interned at{" "}
                    <span className="about__specialText">DnG Analystics Inc.</span> this past fall and summer semesters of 2023, and
                    have worked as a full-time employee at <span className="about__specialText">Amdocs</span> for about 2 years.
                    With roles as a Software Engineer Intern and a Software Developer
                    respectively. <br /> <br />
                    I have a passion for software security and an unwavering commitment to optimize systems' integrity, scalability, and efficiency.
                    <br /> <br /> Currently, I am expanding my skills by learning about{" "}
                    <span className="about__specialText">frontend development</span>,{" "}
                    <span className="about__specialText">Authentication and Authorization service</span>, and{" "}
                    <span className="about__specialText">event streaming services</span>
                    to expand my knowledge in{" "}
                    <span className="about__specialText">Full-Stack Development</span>.
                    </p>
                    <br />
                    <p className="about__body">
                    You can reach out to me on my{" "}
                    {/* <NavHashLink className="about__specialText" smooth to="#contact">
                        contact
                    </NavHashLink>{" "} */}
                    page
                    </p>
                </div>
                <img
                    className="about__headshot"
                    src="/assets/Apoorv_Sharma_image.jpg"
                    alt="Brand Logo"
                    width="450"
                    height="550"
                />
            </section>
        </div>
    );
}

export default About;