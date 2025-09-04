import React, { useState, useRef } from 'react'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Hero from './components/Hero'
import Parallax_01 from './components/Parallax_01'
import About from './components/About'
import Services from './components/Services'
import Parallax_02 from './components/Parallax_02'
import Technologies from './components/Technologies'
import Parallax_03 from './components/Parallax_03'
import Summary from './components/Summary'
import './index.css'

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

      <Hero />

      <Welcome />

      <Parallax_01 />

      <About />

      <Services />

      <Parallax_02 />

      <Technologies />

      <Parallax_03 />

      <Summary />


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
                  className="flex-1 p-2 border border-gray-400 rounded hover:border-blue-500 focus:border-blue-500 focus:outline-none"
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
                <input type="email" className="flex-1 p-2 border border-gray-400 rounded hover:border-blue-500 focus:border-blue-500 focus:outline-none"
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
                  className="w-full p-2 border border-gray-400 rounded hover:border-blue-500 focus:border-blue-500 focus:outline-none"
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
                  className="w-full p-2 border border-gray-400 rounded hover:border-blue-500 focus:border-blue-500 focus:outline-none"
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
                  className="w-full p-2 border border-gray-400 rounded hover:border-blue-500 focus:border-blue-500 focus:outline-none" 
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
