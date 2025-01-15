import React, { useCallback } from "react";

// Components
import FormInputWrapper from "./FormInputWrapper";

const CallOrderModalContent = ({ updateFormData = () => {} }) => {
  // Update form data based on input changes
  const handleInputChange = useCallback((field, value) => {
    updateFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }, []);

  return (
    <div className="space-y-4">
      {/* First name */}
      <FormInputWrapper
        label="Ism *"
        maxLength="72"
        name="firstName"
        autoFocus={true}
        placeholder="Falonchi"
        onChange={(value) => handleInputChange("firstName", value)}
      />

      {/* Phone number */}
      <FormInputWrapper
        type="tel"
        maxLength="19"
        label="Tel raqam *"
        name="phoneNumber"
        placeholder="+998 (__) ___-__-__"
        onChange={(value) => handleInputChange("phoneNumber", value)}
      />

      {/* Description */}
      <FormInputWrapper
        as="textarea"
        label="Izoh *"
        maxLength="1024"
        name="description"
        placeholder="Hamkorlik dasturi"
        onChange={(value) => handleInputChange("description", value)}
      />
    </div>
  );
};

export default CallOrderModalContent;
