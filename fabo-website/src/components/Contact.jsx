import React, { useState, useRef } from 'react'

import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

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
            {/* CONTACT US */}
            <section id="contact" className="bg-gray-200 py-16 mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl text-center font-bold mb-8">
                    {t("contact.title")}
                </h2>

                {/* Intro */}
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
                    {t("contact.description")}
                </p>

                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
                    {/* Company Info */}
                    <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg">
                        <h3 className="font-bold mb-4">{t("contact.info.locations.title")}</h3>
                        <p className="mb-4">
                            {t("contact.info.locations.Budapest")}
                        </p>
                        <p className="mb-4">
                            {t("contact.info.locations.Miskolc")}
                        </p>
                        <h3 className="font-bold mb-4">{t("contact.info.email")}</h3>
                        <a href="mailto:fabobudapest@gmail.com" 
                            className="mb-4 hover:text-blue-600 hover:underline">
                            ✉ fabobudapest@gmail.com
                        </a>
                        <p className="mb-4"></p>
                        <h3 className="font-bold mb-4">{t("contact.info.phone")}</h3>
                        <a href="tel:+4917667437678" 
                            className="mb-4 hover:text-blue-600 hover:underline">
                            ☎ +49 176 67437678</a>
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
                            placeholder={t("contact.form.name.placeholder")}
                            required
                            title={t("contact.form.name.title")}
                            onInvalid={e => e.target.setCustomValidity(e.target.title)}
                            onInput={e => e.target.setCustomValidity('')}/>
                        <input type="email" className="flex-1 p-2 border border-gray-400 rounded hover:border-blue-500 focus:border-blue-500 focus:outline-none"
                            name="email"
                            placeholder={t("contact.form.email.placeholder")} 
                            required
                            title={t("contact.form.email.title")}
                            onInvalid={e => e.target.setCustomValidity(e.target.title)}
                            onInput={e => e.target.setCustomValidity('')}/>
                        </div>

                        {/* Phone (optional) */}
                        <div>
                        <input type="tel" 
                            className="w-full p-2 border border-gray-400 rounded hover:border-blue-500 focus:border-blue-500 focus:outline-none"
                            name="phone"
                            pattern="^\+?[0-9\s\-\(\)]{7,20}$"
                            placeholder={t("contact.form.phone.placeholder")}
                            title={t("contact.form.phone.title")}
                            onInvalid={e => e.target.setCustomValidity(e.target.title)}
                            onInput={e => e.target.setCustomValidity('')}/>
                        </div>

                        {/* Subject */}
                        <div>
                        <input type="text" 
                            className="w-full p-2 border border-gray-400 rounded hover:border-blue-500 focus:border-blue-500 focus:outline-none"
                            name="_subject"
                            placeholder={t("contact.form.subject.placeholder")}
                            required
                            title={t("contact.form.subject.title")}
                            onInvalid={e => e.target.setCustomValidity(e.target.title)}
                            onInput={e => e.target.setCustomValidity('')}/>
                        </div>

                        {/* Message */}
                        <div>
                        <textarea 
                            className="w-full p-2 border border-gray-400 rounded hover:border-blue-500 focus:border-blue-500 focus:outline-none" 
                            rows="4"
                            name="message"
                            placeholder={t("contact.form.message.placeholder")}
                            required
                            title={t("contact.form.message.title")}
                            onInvalid={e => e.target.setCustomValidity(e.target.title)}
                            onInput={e => e.target.setCustomValidity('')}></textarea>
                        </div>

                        {/* Submit button */}
                        <button type="submit" 
                            className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white px-6 py-3 rounded-lg shadow-md font-semibold">
                            {t("contact.form.sendButton")}
                        </button>

                        {/* Success message (hidden by default) */}
                        {success && (
                        <p className="mt-4 p-4 rounded-lg bg-green-100 text-green-700 font-medium">
                            {t("contact.form.successMessage")}
                        </p>
                        )}
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;