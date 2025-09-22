import * as yup from "yup";

export const getContactSchema = (t) => yup.object({
  name: yup.string().required(t("contact.form.name.title") || "Name is required"),
  email: yup
    .string()
    .email(t("contact.form.email.invalid") || "Please enter a valid email")
    .required(t("contact.form.email.title") || "Email is required"),
  phone: yup
    .string()
    .nullable()
    .matches(/^\+?[0-9\s\-()]{7,20}$/, t("contact.form.phone.title") || "Invalid phone")
    .notRequired(),
  _subject: yup.string().required(t("contact.form.subject.title") || "Subject is required"),
  message: yup.string().required(t("contact.form.message.title") || "Message is required"),
  honey: yup.string().max(0), // honeypot must be empty
});
