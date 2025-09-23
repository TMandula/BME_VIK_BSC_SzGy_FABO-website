import Welcome from '../components/Welcome'
import Hero from '../components/Hero'
import ParallaxSection from '../components/ParallaxSection';
import About from '../components/About'
import Services from '../components/Services'
import Technologies from '../components/Technologies'
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

            <ParallaxSection 
                src="/images/eric-weber--KPwl1VaSyw-unsplash.jpg" 
                translationKey="parallax_01.motto" 
            />

            <section><About /></section>

            <section><Services /></section>

            <ParallaxSection 
                src="/images/tim-hufner-d7TjlJ4MNMs-unsplash.jpg" 
                translationKey="parallax_02.motto" 
            />

            <section><Technologies /></section>

            <ParallaxSection 
                src="/images/alvaro-sanchez-h8Tvv2fTNs8-unsplash.jpg" 
                translationKey="parallax_03.motto" 
            />

            <section><Summary /></section>
        </>
    )
}

export default HomePage;
