import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
    const location = useLocation();
    const section = location.state?.section;
    
    useEffect(() => {
        if (section) {
            const el = document.getElementById(section);
            const header = document.getElementById("mainHeader");
            if (el) {
                const headerHeight = header.offsetHeight; // dynamic header height
                const elTop = el.getBoundingClientRect().top + window.scrollY;
                 window.scrollTo({
                    top: elTop - headerHeight, // offset by header height
                    behavior: "smooth"
                });
            }
        }
    }, [section]);

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
