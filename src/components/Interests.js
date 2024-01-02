import Typewriter from "typewriter-effect";

const Interests = () =>{
    return (
        <Typewriter
            options={{
                strings: [
                "Software Developer.",
                "Backend Engineer.",
                "DSA enthusiast.",
                "Space enthusiast."
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Interests