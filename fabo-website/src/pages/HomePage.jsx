import Header from "../components/Header";
import Welcome from '../components/Welcome'
import Hero from '../components/Hero'
import Parallax_01 from '../components/Parallax_01'
import About from '../components/About'
import Services from '../components/Services'
import Parallax_02 from '../components/Parallax_02'
import Technologies from '../components/Technologies'
import Parallax_03 from '../components/Parallax_03'
import Summary from '../components/Summary'
import '../index.css'

const HomePage = () => {
    return (
        <>
            <Header />

            <Hero />

            <Welcome />

            <Parallax_01 />

            <About />

            <Services />

            <Parallax_02 />

            <Technologies />

            <Parallax_03 />

            <Summary />
        </>
    )
}

export default HomePage;
