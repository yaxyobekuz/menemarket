import React, { useCallback } from "react";

// Utils
import { getRandomNumber } from "../utils";

// Redux
import { useSelector } from "react-redux";

// Components
import FormInputWrapper from "./FormInputWrapper";

const CreateStreamModalContent = ({ updateFormData = () => {} }) => {
  const { product } = useSelector((state) => state.modal.data);

  // Update form data based on input changes
  const handleInputChange = (field, value) => {
    updateFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-4 pb-4">
      {/* First name */}
      <FormInputWrapper
        autoFocus
        name="name"
        maxLength="72"
        label="Oqim nomi *"
        placeholder={`Oqim #${getRandomNumber(0, 999)}`}
        onChange={(value) => handleInputChange("name", value)}
      />

      <div className="space-y-2">
        <b className="inline-block font-semibold">Mahsulot</b>
        <p className="line-clamp-5">{product.title}</p>
      </div>
    </div>
  );
};

export default CreateStreamModalContent;
