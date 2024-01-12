import Typewriter from "typewriter-effect";

const Interests = () =>{
    return (
        <Typewriter
            options={{
                strings: [
                "System Architecture Design.",
                "Backend Engineering.",
                "Problem Solving.",
                "Astronomy."
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}
// System Architecture Design
// Backend Engineering
// Problem Solving
// Astronomics

export default Interests