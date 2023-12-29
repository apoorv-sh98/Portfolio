import { Container } from "react-bootstrap"

function Home() {
    return (
        <section className="name-element">
            <Container fluid id="home">
                <h1 className="heading">
                    Hello, my name is
                </h1>
                <h1 className="header-name">
                    Apoorv Sharma
                </h1>
                <h1 className="heading">
                    I am a Software Developer.
                </h1>
            </Container>
        </section>
    )
}

export default Home; 