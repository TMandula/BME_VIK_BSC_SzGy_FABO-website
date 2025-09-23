import Welcome from '../components/Welcome'
import Hero from '../components/Hero'
import Parallax_01 from '../components/Parallax_01'
import About from '../components/About'
import Services from '../components/Services'
import Parallax_02 from '../components/Parallax_02'
import Technologies from '../components/Technologies'
import Parallax_03 from '../components/Parallax_03'
import Summary from '../components/Summary'
import { useHeaderHeight } from "../hooks/useHeaderHeight";
import { useScrollToSection } from "../hooks/useScrollToSection";
import '../index.css'

const HomePage = () => {
    const headerHeight = useHeaderHeight();
    useScrollToSection(headerHeight);

    return (
        <>
            <section><Hero /></section>

            <section><Welcome /></section>

            <section><Parallax_01 /></section>

            <section><About /></section>

            <section><Services /></section>

            <section><Parallax_02 /></section>

            <section><Technologies /></section>

            <section><Parallax_03 /></section>

            <section><Summary /></section>
        </>
    )
}

export default HomePage;
