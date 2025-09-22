import React from "react";

const FormInput = ({ register, name, placeholder, error, type = "text", rows }) => (
  <div>
    <label className="sr-only">{placeholder}</label>
    {type === "textarea" ? (
      <textarea
        {...register(name)}
        rows={rows || 4}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        className={`w-full p-2 border rounded focus:outline-none focus:border-blue-500 ${
          error ? "border-red-500" : "border-gray-400"
        }`}
      />
    ) : (
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        className={`w-full p-2 border rounded focus:outline-none focus:border-blue-500 ${
          error ? "border-red-500" : "border-gray-400"
        }`}
      />
    )}
    {error && (
      <p role="alert" className="text-sm text-red-600 mt-1">
        {error.message}
      </p>
    )}
  </div>
);

export default FormInput;
