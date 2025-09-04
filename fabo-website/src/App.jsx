import React, { useState, useRef } from 'react'
import Header from './components/Header'
import Particles from "./components/Particles";
import landscape from './assets/eric-weber--KPwl1VaSyw-unsplash.jpg';


const App = () => {

  
  // AJAX SUBMISSION SCRIPT
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setSuccess(true);
      } else {
        alert("There was a problem submitting the form.");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section id="home" 
        className="relative flex items-center justify-center text-center text-white overflow-hidden min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/shakti-rajpurohit-ggs-47SjYy0-unsplash.jpg')" }}>

        {/* Particles layer */}
        <div id="heroParticles" 
          className="absolute inset-0 w-full h-full pointer-events-none z-20">
        </div>
        <Particles />

        {/* Content layer */}
        <div className="text-left max-w-4xl mx-auto px-4 z-30">
          <h1 className="font-extrabold leading-tight mb-2"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              data-lang-de="FABO Accounting"
              data-lang-en="FABO Accounting">
            FABO Buchhaltung
          </h1>
          <h2 className="font-semibold mb-8"
              style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
              data-lang-de="Ihr Partner für zuverlässige Finanzlösungen"
              data-lang-en="Your Reliable Partner in Finance">
            Ihr Partner für zuverlässige Finanzlösungen
          </h2>
          <p className="opacity-90 mb-16"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
              data-lang-de="Wir unterstützen deutsche Unternehmen mit präzisen und effizienten Buchhaltungs- und Controlling-Services. Ob einzelne Fachkräfte oder komplette Teams – wir entlasten Sie, damit Sie sich auf Ihr Kerngeschäft konzentrieren können."
              data-lang-en="We support German companies with precise and efficient accounting and controlling services. Whether you need individual experts or a full team, we help you save time and focus on your core business.">
            Wir bieten maßgeschneiderte Lösungen für Ihre Bedürfnisse.
          </p>
          <a href="#contact"
            className="relative bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow-lg transition"
            data-lang-de="Kontakt"
            data-lang-en="Contact">
            Kontakt
          </a>
        </div>
        <div>
        </div>
      </section>

      {/* WELCOME TEXT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="mx-auto">
          <h2 
            className="text-3xl font-bold mb-10" 
            data-lang-de="Willkommen bei FABO Accounting" 
            data-lang-en="Welcome to FABO Accounting">
            Herzlich willkommen
          </h2>
          <p className="text-lg font-bold leading-relaxed mb-2" 
            data-lang-de="Wir bieten Outsourcing-Lösungen zur Optimierung der Arbeitsabläufe deutscher Unternehmen." 
            data-lang-en="We provide outsourced accounting solutions that make your financial workflows more efficient.">
            Wir freuen uns, Sie auf unserer Webseite begrüßen zu dürfen. Unser Unternehmen steht für Qualität, Innovation und Kundenorientierung. Mit einem engagierten Team und modernen Technologien arbeiten wir daran, Ihre Visionen in die Realität umzusetzen.
          </p>
          <p className="text-lg leading-relaxed mb-6" 
              data-lang-de="Unsere Experten integrieren sich schnell in Ihre Strukturen, übernehmen zeitintensive Aufgaben und sichern reibungslose Abläufe." 
              data-lang-en="Our professionals integrate seamlessly into your company structure, taking over time-consuming or sensitive processes and ensuring smooth operations.">
            Egal ob Sie ein kleines Start-up oder ein etabliertes Unternehmen sind – wir bieten maßgeschneiderte Lösungen, die Ihre individuellen Bedürfnisse erfüllen. Unser Ziel ist es, nicht nur Ihre Erwartungen zu erfüllen, sondern sie zu übertreffen.
          </p>
          <p className="text-lg leading-relaxed" 
              data-lang-de="Ob für kurzfristige Projekte oder langfristige Unterstützung – wir sind der verlässliche Partner an Ihrer Seite." 
              data-lang-en="Whether for short-term projects or long-term support – we are the reliable partner at your side.">
            Schauen Sie sich um, lernen Sie unser Team kennen und entdecken Sie, wie wir gemeinsam Großes erreichen können.
          </p>
        </div>
      </section>

      {/* Parallax - Deutsche Landschaft */}
      <section className="h-[60vh] bg-fixed bg-center bg-cover" 
        style={{ backgroundImage: `url(${landscape})` }}>
          <div className="h-full bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="text-white text-4xl font-bold drop-shadow-lg text-center"
              data-lang-de="Aus Zahlen Chancen machen." 
              data-lang-en="Turning numbers into opportunities.">
              Turning numbers into opportunities.</h2>
          </div>
      </section>
      {/* Tailwind Parallax - Deutsche Landschaft */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${landscape})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold drop-shadow-lg text-center">
            Turning numbers into opportunities.
          </h2>
        </div>
      </section>


      {/* About Us Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <div className="mx-auto">
            <h2 className="text-3xl font-bold mb-6" data-lang-de="Über uns" data-lang-en="About Us">Über uns</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4" 
                data-lang-de="Wir sind ein ungarisches Wirtschaftsprüfungs - 
                  und Buchhaltungsunternehmen mit Sitz in Budapest – 
                  spezialisiert auf die Zusammenarbeit 
                  mit internationalen und deutschen Firmen." 
                data-lang-en="FABO Accounting is a Hungarian auditing 
                  and accounting firm based in Budapest, 
                  working primarily with international and German companies.">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed elit vel turpis luctus euismod.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4" 
                data-lang-de="Unsere jungen, hochqualifizierten Finanzexperten verfügen 
                  über Erfahrung mit deutschen und internationalen Standards 
                  (HGB, IFRS, Umsatzsteuerrecht) und unterstützen Sie 
                  zuverlässig bei allen buchhalterischen Aufgaben." 
                data-lang-en="Our young yet experienced financial professionals 
                  are skilled in German and international standards 
                  (HGB, IFRS, VAT regulations) and can support you 
                  in a wide range of accounting and reporting tasks.">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed elit vel turpis luctus euismod.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed" 
                data-lang-de="Mit uns gewinnen Sie nicht nur Kapazität, sondern einen Partner, dem Sie vertrauen können." 
                data-lang-en="With us, you don’t just gain extra capacity – 
                  you gain a trustworthy partner who understands your needs 
                  and delivers reliable results.">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed elit vel turpis luctus euismod.
            </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-gray-200 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Title */}
          <h2 className="text-4xl font-bold mb-8" data-lang-de="Dienstleistungen" data-lang-en="Services">
            Services
          </h2>

          {/* Intro */}
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12"
            data-lang-de="Wir bieten flexible Outsourcing-Lösungen 
              in allen wichtigen Bereichen der Buchhaltung 
              und des Finanzwesens."
            data-lang-en="We provide tailored outsourcing solutions 
              for all key areas of accounting and finance.">
            We can provide various solutions for different fields of finance.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto ">

            {/* AP/AR */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition transition-all duration-300 border-b-4 border-transparent hover:-translate-y-2 hover:border-blue-500">
              <div className="text-blue-500 text-5xl mb-4">
                <i className="fas fa-file-invoice-dollar"></i>
              </div>
              <h3 className="font-bold text-xl mb-6" data-lang-de="AP/AR" data-lang-en="AP/AR">AP/AR</h3>
              <p className="text-gray-600 text-left mb-4"
                data-lang-de="AP/AR-Prozesse sind zeitaufwendig 
                  und entscheidend für einen reibungslosen 
                  Monats- und Jahresabschluss."
                data-lang-en="AP/AR processes are time-intensive 
                  and critical for smooth month- and year-end closings.">
                AP/AR is time consuming, and it affects the flow of accounting, especially by month and year end closing. We can help you accelerate these processes by providing you a full team or extending your already existing team.
              </p>
              <p className="text-gray-600 text-left"
                data-lang-de="Wir beschleunigen diese Abläufe 
                  und sichern Genauigkeit und Kontinuität – 
                  durch die Verstärkung Ihres Teams 
                  oder durch die Bereitstellung eines kompletten Expertenteams."
                data-lang-en="Our teams accelerate these tasks, 
                  ensuring accuracy and continuity — 
                  either by strengthening your existing staff 
                  or by providing a dedicated team.">
                AP/AR is time consuming, and it affects the flow of accounting, especially by month and year end closing. We can help you accelerate these processes by providing you a full team or extending your already existing team.
              </p>
            </div>

            {/* Treasury */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition transition-all duration-300 border-b-4 border-transparent hover:-translate-y-2 hover:border-green-500">
              <div className="text-green-500 text-5xl mb-4">
                <i className="fas fa-piggy-bank"></i>
              </div>
              <h3 className="font-bold text-xl mb-6" data-lang-de="Treasury" data-lang-en="Treasury">Treasury</h3>
              <p className="text-gray-600 mb-10 text-left"
                data-lang-de="Treasury erfordert höchste Sorgfalt 
                  und Vertraulichkeit."
                data-lang-en="Treasury management requires precision 
                and confidentiality.">
                Treasury is a very sensitive task. We can offer professionals with experience, who can offer support in treasury related tasks.
              </p>
              <p className="text-gray-600 text-left"
                data-lang-de="Unsere erfahrenen Fachkräfte unterstützen Sie 
                  in den täglichen Abläufen, der Liquiditätsplanung 
                  und im Reporting – stets mit Fokus auf Compliance 
                  und Transparenz."
                data-lang-en="Our experienced professionals support you 
                in daily operations, liquidity planning, 
                and reporting, ensuring compliance and control at every step.">
                Treasury is a very sensitive task. We can offer professionals with experience, who can offer support in treasury related tasks.
              </p>
            </div>

            {/* Hauptbuchhaltung */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition transition-all duration-300 border-b-4 border-transparent hover:-translate-y-2 hover:border-blue-900">
              <div className="text-blue-900 text-5xl mb-4" style={{ color: "#073D7F" }}>
                <i className="fas fa-book"></i>
              </div>
              <h3 className="font-bold text-xl mb-6" data-lang-de="Hauptbuchhaltung" data-lang-en="General Accounting">
                Hauptbuchhaltung
              </h3>
              <p className="text-gray-600 mb-4 text-left"
                data-lang-de="Rückstellungen, Anlagenbuchhaltung und 
                Hauptbuchungen sind das Fundament eines korrekten Abschlusses.">
                Rückstellungen, Anlagenbuchhaltung und Hauptbuchungen sind 
                das Fundament eines korrekten Abschlusses.
              </p>
              <p className="text-gray-600 text-left"
                data-lang-de="Wir übernehmen diese Aufgaben effizient 
                  und stellen sicher, dass Ihre Monats- und Jahresabschlüsse 
                  rechtzeitig und fehlerfrei erfolgen."
                data-lang-en="We accelerate these processes 
                  and provide expert support for timely and correct closings.">
                Accruals, Fixed Asset, and General Ledger bookings are essential for month and year end closings. We can provide support, to accelerate these tasks, and offer professional help.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Parallax - Berliner Fernsehturm */}
      <section className="h-[60vh] bg-fixed bg-center bg-cover" 
          style={{ backgroundImage: `url(src/assets/tim-hufner-d7TjlJ4MNMs-unsplash.jpg)` }}>
          <div className="h-full bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold drop-shadow-lg text-center" 
              data-lang-de="Erfolg durch Präzision und Partnerschaft." 
              data-lang-en="Success through precision and partnership.">
              Herzlich willkommen
            </h2>
          </div>
      </section>

      {/* TECHNOLOGIES */}
      <section id="technologies" className="bg-white py-16 px-4 max-w-5xl mx-auto">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Title */}
          <h2 className="text-4xl font-bold mb-4" 
          data-lang-de="Technologien" 
          data-lang-en="Technologies">
            Technologies
          </h2>
          
          {/* Intro */}
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
            data-lang-de="Unsere Fachkräfte sind in führenden ERP- 
              und Buchhaltungssystemen geschult und können sich sofort 
              in Ihre Prozesse einfügen:"
            data-lang-en="Our professionals are proficient in leading ERP 
              and accounting systems, ensuring smooth integration into 
              your processes:">
            We are already proficient in the following ERP programs.
          </p>

          {/* Technology Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* Business Central */}
            <div className="flex flex-col items-center">
              <div className="tech-tile icon-wrapper border-2 border-gray-300 p-6 mb-6 hover:border-[#0FE0F2]">
                <i className="fas fa-cogs text-[#0FE0F2] text-6xl"></i>
              </div>
              <p className="text-blue-900 font-semibold">Business Central</p>
            </div>

            {/* Datev */}
            <div className="flex flex-col items-center">
              <div className="tech-tile icon-wrapper border-2 border-gray-300 p-6 mb-6 hover:border-[#90d034]">
                <i className="fas fa-file-invoice text-[#90d034] text-6xl"></i>
              </div>
              <p className="text-blue-900 font-semibold">DATEV</p>
            </div>

            {/* Lexware */}
            <div className="flex flex-col items-center">
              <div className="tech-tile icon-wrapper border-2 border-gray-300 p-6 mb-6 hover:border-[#ff4654]">
                <i className="fas fa-chart-line text-[#ff4654] text-6xl"></i>
              </div>
              <p className="text-blue-900 font-semibold">Lexware</p>
            </div>

            {/* SAP Hana */}
            <div className="flex flex-col items-center">
              <div className="tech-tile icon-wrapper border-2 border-gray-300 p-6 mb-6 hover:border-[#1c5cbc]">
                <i className="fas fa-database text-[#1c5cbc] text-6xl"></i>
              </div>
              <p className="text-blue-900 font-semibold">SAP HANA</p>
            </div>

          </div>

          {/* Disclaimer */}
          <p className="mt-12 text-gray-500 text-sm max-w-3xl mx-auto"
            data-lang-de="Alle Produktnamen, Logos und Marken sind Eigentum 
              ihrer jeweiligen Inhaber. 
              Die Verwendung dieser Namen impliziert keine Zugehörigkeit 
              oder Billigung."
            data-lang-en="All product names, logos, and brands are the 
              property of their respective owners. 
              Use of these names does not imply any affiliation or endorsement.">
            All product names, logos, and brands are the property of their 
            respective owners. Use of these names does not imply any 
            affiliation or endorsement.
          </p>
        </div>
      </section>

      {/* Parallax - Brangengurger Tor */}
      <section 
        className="h-[60vh] bg-fixed bg-center bg-cover" 
        style={{ backgroundImage: `url(src/assets/alvaro-sanchez-h8Tvv2fTNs8-unsplash.jpg)` }}>
          <div className="h-full bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold drop-shadow-lg text-center" 
              data-lang-de="Ihr Erfolg ist unser Geschäft – jedes Detail zählt." 
              data-lang-en="Your success is our business — every detail matters.">
              Herzlich willkommen
            </h2>
          </div>
      </section>

      {/* SUMMARY ABOUT US */}
      <section id="about-summary" className="py-16 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold"
              data-lang-de="FABO Accounting im Überblick"
              data-lang-en="FABO Accounting at a Glance">
              Über uns
            </h2>
            <p className="mt-3 text-slate-600"
              data-lang-de="Wir sind ein spezialisiertes Outsourcing-Team 
                mit Fokus auf deutsche Standards und einer klaren 
                Hands-on-Mentalität."
              data-lang-en="We are a specialized outsourcing team 
                with a strong focus on German accounting standards 
                and a hands-on mentality.">
              Wir sind ein spezialisiertes Outsourcing-Team 
              mit Fokus auf deutsche Standards und Hands-on-Mentalität. 
              Transparente Kommunikation, feste Ansprechpartner, 
              messbare Ergebnisse.
            </p>
            <p className="mt-3 text-slate-600"
              data-lang-de="Unser Versprechen: transparente Kommunikation, 
                feste Ansprechpartner und messbare Ergebnisse."
              data-lang-en="Our approach: transparent communication, 
                fixed contact persons, and measurable results.">
              Wir sind ein spezialisiertes Outsourcing-Team 
              mit Fokus auf deutsche Standards und Hands-on-Mentalität. 
              Transparente Kommunikation, feste Ansprechpartner, 
              messbare Ergebnisse.
            </p>
            <ul className="mt-4 text-slate-700 list-disc pl-5">
              <li><p data-lang-de="Remote-First-Zusammenarbeit" 
                data-lang-en="Remote-first cooperation">
                  Fixed-price or retainer models
                </p>
              </li>
              <li><p data-lang-de="Schnelle Verfügbarkeit & Skalierbarkeit" 
                data-lang-en="Fast availability & scalability">
                  Fixed-price or retainer models
                </p>
              </li>
              <li><p data-lang-de="Sichere, SLA-basierte und auditierbare Prozesse" 
                data-lang-en="Secure, SLA-based, and auditable processes">
                  Fixed-price or retainer models
                </p>
              </li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Teamarbeit im Finanzwesen" 
            className="w-full h-full object-contain rounded-2xl border object-cover w-full h-72" 
            loading="lazy" />
        </div>
      </section>

      {/* CONTACT US */}
      <section id="contact" className="bg-gray-200 py-16 mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-8" 
          data-lang-de="Kontakt" 
          data-lang-en="Contact Us">
          Kontakt
        </h2>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Company Info */}
          <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="font-bold mb-4" 
              data-lang-de="Standorte" 
              data-lang-en="Locations">Standorte</h3>
            <p className="mb-4"
              data-lang-de="📍 Budapest, Ungarn"
              data-lang-en="📍 Budapest, Hungary">
              Budapest, Hungary
            </p>
            <p className="mb-4"
              data-lang-de="📍 Miskolc, Ungarn"
              data-lang-en="📍 Miskolc, Hungary">
              Miskolc, Hungary
            </p>
            <h3 className="font-bold mb-4" 
              data-lang-de="E-Mail" 
              data-lang-en="Email">E-Mail</h3>
            <a href="mailto:fabobudapest@gmail.com" 
              className="mb-4 hover:text-blue-600 hover:underline">
              ✉ fabobudapest@gmail.com
            </a>
            <p className="mb-4"></p>
            <h3 className="font-bold mb-4" 
              data-lang-de="Telefon" 
              data-lang-en="Phone">Telefon</h3>
            {/* TODO - German phone number */}
            <a href="tel:+49123456789" 
              className="mb-4 hover:text-blue-600 hover:underline">
              ☎ +49 123 456 789</a>
          </div >

          {/* Form */}
          <form  
            id="contactForm"
            ref={formRef}
            action="https://formspree.io/f/mjkonwer" 
            method="POST" 
            onSubmit={handleSubmit}
            className="space-y-4 flex-1 bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg">
        
              {/* Name + Email */}
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                <input type="text" 
                  className="flex-1 p-2 border rounded hover:border-blue-500 focus:border-blue-500 focus:outline-none"
                  name="name" 
                  data-placeholder-de="Name *"
                  data-placeholder-en="Name *"
                  placeholder="Name" 
                  required
                  data-title-de="Bitte geben Sie Ihren Namen ein"
                  data-title-en="Please enter your name"
                  title="Bitte geben Sie Ihren Namen ein"
                  onInvalid={e => e.target.setCustomValidity(e.target.title)}
                  onInput={e => e.target.setCustomValidity('')}/>
                <input type="email" className="flex-1 p-2 border rounded hover:border-blue-500 focus:border-blue-500 focus:outline-none"
                  name="email"
                  data-placeholder-de="E-Mail *"
                  data-placeholder-en="Email *"
                  placeholder="E-Mail" 
                  required
                  data-title-de="Bitte geben Sie Ihre E-Mail-Adresse ein"
                  data-title-en="Please enter your email address"
                  title="Bitte geben Sie Ihre E-Mail-Adresse ein"
                  onInvalid={e => e.target.setCustomValidity(e.target.title)}
                  onInput={e => e.target.setCustomValidity('')}/>
              </div>

              {/* Phone (optional) */}
              <div>
                <input type="tel" 
                  className="w-full p-2 border rounded hover:border-blue-500 focus:border-blue-500 focus:outline-none"
                  name="phone"
                  pattern="^\+?[0-9\s\-\(\)]{7,20}$"
                  data-placeholder-de="Telefon (optional)"
                  data-placeholder-en="Phone (optional)"
                  placeholder="Telefon (optional)"
                  data-title-de="Bitte geben Sie eine gültige Telefonnummer ein, z. B. +49 123 4567890"
                  data-title-en="Please enter a valid phone number, e.g., +49 123 4567890"
                  title="Bitte geben Sie eine gültige Telefonnummer ein, z. B. +49 123 4567890"
                  onInvalid={e => e.target.setCustomValidity(e.target.title)}
                  onInput={e => e.target.setCustomValidity('')}/>
              </div>

              {/* Subject */}
              <div>
                <input type="text" 
                  className="w-full p-2 border rounded hover:border-blue-500 focus:border-blue-500 focus:outline-none"
                  name="_subject"
                  data-placeholder-de="Betreff *"
                  data-placeholder-en="Subject *"
                  placeholder="Betreff" 
                  required
                  data-title-de="Bitte geben Sie den Betreff ein"
                  data-title-en="Please enter the subject"
                  title="Bitte geben Sie den Betreff ein"
                  onInvalid={e => e.target.setCustomValidity(e.target.title)}
                  onInput={e => e.target.setCustomValidity('')}/>
              </div>

              {/* Message */}
              <div>
                <textarea 
                  className="w-full p-2 border rounded hover:border-blue-500 focus:border-blue-500 focus:outline-none" 
                  rows="4"
                  name="message"
                  data-placeholder-de="Nachricht * (z. B.: Unternehmen, Benötigte Arbeitsstunden, Aufgabenbeschreibung)"
                  data-placeholder-en="Message * (e.g.: Company, Required working hours, Task description)"
                  placeholder="Nachricht (z. B.: Unternehmen, Benötigte Arbeitsstunden, Aufgabenbeschreibung)"
                  required
                  data-title-de="Bitte geben Sie eine Nachricht ein"
                  data-title-en="Please enter a message"
                  title="Bitte geben Sie eine Nachricht ein"
                  onInvalid={e => e.target.setCustomValidity(e.target.title)}
                  onInput={e => e.target.setCustomValidity('')}></textarea>
              </div>

              {/* Submit button */}
              <button type="submit" 
                className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white px-6 py-3 rounded-lg shadow-md font-semibold"
                data-lang-de="Senden"
                data-lang-en="Send">
                Senden
              </button>

              {/* Success message (hidden by default) */}
              {success && (
                <p
                  className="mt-4 p-4 rounded-lg bg-green-100 text-green-700 font-medium"
                  data-lang-de="Danke! Ihre Nachricht wurde erfolgreich gesendet."
                  data-lang-en="Thanks! Your message has been sent successfully."
                >
                  Danke! Ihre Nachricht wurde erfolgreich gesendet.
                </p>
              )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-extrabold text-white">FABO Accounting</div>
            <p className="mt-3 text-slate-400 text-sm"
              data-lang-de="Budapest · Miskolc · Ungarn"
              data-lang-en="Budapest · Miskolc · Hungary">Budapest · Miskolc · Hungary</p>
          </div>
          <nav className="space-y-2">
            <div className="font-semibold text-white" data-lang-de="Standorte" data-lang-en="Locations">Standorte</div>
            <p className="mt-3 text-slate-400 text-sm"
              data-lang-de="Budapest, Ungarn"
              data-lang-en="Budapest, Hungary">
              Budapest, Hungary
            </p>
            <p className="mt-3 text-slate-400 text-sm"
              data-lang-de="Miskolc, Ungarn"
              data-lang-en="Miskolc, Hungary">
              Miskolc, Hungary
            </p>
          </nav>
          <nav className="space-y-2">
            <div className="font-semibold text-white" data-lang-de="Menü" data-lang-en="Menu">Menü</div>
            <a href="#home" 
                className="block w-max min-w-[16ch] text-slate-400 hover:text-white"
                data-lang-de="Startseite" data-lang-en="Home">Home</a>
              <a href="#about"  
                className="block w-max min-w-[16ch] text-slate-400 hover:text-white"
                data-lang-de="Über uns" data-lang-en="About us">About us</a>
              <a href="#services"  
                className="block w-max min-w-[16ch] text-slate-400 hover:text-white"
                data-lang-de="Dienstleistungen" data-lang-en="Services">Services</a>
              <a href="#technologies"  
                className="block w-max min-w-[16ch] text-slate-400 hover:text-white"
                data-lang-de="Technologien" data-lang-en="Technologies">Technologies</a>
              <a href="#contact"  
                className="block w-max min-w-[16ch] text-slate-400 hover:text-white"
                data-lang-de="Kontakt" data-lang-en="Contact">Contact</a>
          </nav>
          <div className="space-y-2">
            <div className="font-semibold text-white">Kontakt</div>
            <a href="mailto:fabobudapest@gmail.com" 
              className="text-slate-400 text-sm hover:text-white">
              ✉ fabobudapest@gmail.com
            </a><br />
            <a href="tel:+49123456789" 
              className="text-slate-400 text-sm hover:text-white">
              ☎ +49 123 456 789
            </a>
          </div>
        </div>
        <div className="border-t border-slate-800"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-400 flex items-center justify-between">
          <span>© 2025 FABO Accounting. Alle Rechte vorbehalten.</span>
          <div className="flex gap-4">
            <a href="/impressum.html" 
              className="hover:text-white"
              data-lang-de="Impressum"
              data-lang-en="Imprint">
              Impressum
            </a>
            <a href="/datenschutz.html" 
              className="hover:text-white"
              data-lang-de="Datenschutz"
              data-lang-en="Privacy Policy">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
