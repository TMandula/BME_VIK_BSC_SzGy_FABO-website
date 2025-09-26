import React from "react";
import FormInput from "./FormInput";
import { useTranslation } from "react-i18next";
import { useContactForm } from "../../hooks/useContactForm"

const ContactForm = ({ action }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    serverError,
    success,
    onSubmit,
  } = useContactForm(action);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 flex-1 bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg"
    >
      <h3 className="sr-only">{t("contact.title")}</h3>

      <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
        <FormInput
          register={register}
          name="name"
          placeholder={t("contact.form.name.placeholder")}
          error={errors.name}
        />
        <FormInput
          register={register}
          name="email"
          type="email"
          placeholder={t("contact.form.email.placeholder")}
          error={errors.email}
        />
      </div>

      <FormInput
        register={register}
        name="phone"
        type="tel"
        placeholder={t("contact.form.phone.placeholder")}
        error={errors.phone}
      />
      <FormInput
        register={register}
        name="_subject"
        placeholder={t("contact.form.subject.placeholder")}
        error={errors._subject}
      />
      <FormInput
        register={register}
        name="message"
        type="textarea"
        placeholder={t("contact.form.message.placeholder")}
        error={errors.message}
      />

      {/* Honeypot */}
      <input
        {...register("honey")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 rounded-lg font-semibold text-white shadow-md transition-colors duration-200 ${
            isSubmitting
              ? "bg-blue-400 cursor-wait"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSubmitting
            ? t("contact.form.sending") || "Sending..."
            : t("contact.form.sendButton")}
        </button>

        {success && (
          <p
            role="status"
            aria-live="polite"
            className="mt-2 p-2 rounded bg-green-100 text-green-700"
          >
            {t("contact.form.successMessage")}
          </p>
        )}
      </div>

      {serverError && (
        <div
          role="alert"
          aria-live="assertive"
          className="mt-4 p-3 rounded bg-red-100 text-red-700"
        >
          {serverError}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
