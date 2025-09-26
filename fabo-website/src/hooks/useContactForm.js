import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { getContactSchema } from "../components/Contact/contactSchema";

export const useContactForm = (action) => {
  const { t } = useTranslation();
  const schema = getContactSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    setServerError(null);
    setSuccess(false);
    if (data.honey) return; // honeypot

    try {
      const payload = new FormData();
      Object.entries(data).forEach(
        ([key, value]) =>
          value !== undefined && value !== null && payload.append(key, value)
      );

      const response = await fetch(action, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        reset();
        setSuccess(true);
      } else {
        const body = await response.json().catch(() => null);
        setServerError(
          body?.error || t("contact.form.serverError") || "Submission failed"
        );
      }
    } catch (err) {
      setServerError(
        err.message || t("contact.form.serverError") || "Network error"
      );
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    serverError,
    success,
    onSubmit,
  };
};
