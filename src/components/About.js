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
                    Hello, My name is Apoorv Sharma and I am a recent graduate of masters in Computer Science from the{" "}
                    <span className="about__specialText">University of Rochester</span>.
                    <br />
                    I have previously interned with{" "}
                    <span className="about__specialText">DnG Analytics Inc.</span> as a Software Engineer in the fall and summer of 2023, and
                    have worked as a full-time Software Developer at <span className="about__specialText">Amdocs Development Center, India</span> for about 2 years.
                    <br /> <br />
                    I have a passion for software security and an unwavering commitment to optimize systems.
                    <br /> <br /> Currently, I am expanding my skills by learning about{" "}
                    <span className="about__specialText">frontend development</span> using React,{" "}
                    <span className="about__specialText">Authentication and Authorization using Spring Security</span>, and{" "}
                    <span className="about__specialText">Event streaming services like Apache Kafka</span> to expand my knowledge in{" "}
                    <span className="about__specialText">Full-Stack Development</span>.
                    </p>
                    <br />
                    <p className="about__body">
                    You can reach out to me on my contact page
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