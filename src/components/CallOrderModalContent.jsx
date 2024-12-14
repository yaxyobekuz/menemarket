import React, { useCallback, useState } from "react";

// Components
import FormInputWrapper from "./FormInputWrapper";

const CallOrderModalContent = React.forwardRef((_, ref) => {
  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    description: "",
  });

  // Update form data based on input changes
  const handleInputChange = useCallback((field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }, []);

  // Expose formData to parent via ref
  React.useImperativeHandle(ref, () => ({
    data: formData,
  }));

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
});

export default CallOrderModalContent;
