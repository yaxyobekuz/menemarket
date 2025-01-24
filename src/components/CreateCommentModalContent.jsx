import React, { useEffect, useState } from "react";

// Components
import Icon from "./Icon";
import FormInputWrapper from "./FormInputWrapper";

// Images
import yellowStarIcon from "../assets/images/icons/mono-star-filled.svg";
import grayStarIcon from "../assets/images/icons/mono-gray-star-filled.svg";

const CreateCommentModalContent = ({ updateFormData = () => {} }) => {
  const [rating, setRating] = useState(5);

  // Update form data based on input changes
  const handleInputChange = (field, value) => {
    updateFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const updateRating = (rating) => {
    setRating(rating);
    handleInputChange("rating", rating);
  };

  useEffect(() => {
    updateFormData({
      rating: 5,
      comment: "",
      commentor: "",
      gender: "male",
    });
  }, []);

  return (
    <div className="space-y-4 pb-4">
      {/* First name */}
      <FormInputWrapper
        name="name"
        label="Ism *"
        maxLength="72"
        placeholder="Falonchi"
        onChange={(value) => handleInputChange("commentor", value)}
      />

      {/* Izohingiz */}
      <FormInputWrapper
        as="textarea"
        label="Izoh *"
        maxLength="1024"
        name="description"
        placeholder="Mahsulot ajoyib!"
        onChange={(value) => handleInputChange("comment", value)}
      />

      {/* Gender */}
      <div className="space-y-1.5">
        <label htmlFor="gender" className="block pl-1.5">
          Jins *
        </label>

        {/* select */}
        <select
          id="gender"
          name="gender"
          defaultValue="male"
          className="h-11 px-3.5"
          onChange={(e) => handleInputChange("gender", e.target.value)}
        >
          <option value="male">Erkak</option>
          <option value="female">Ayol</option>
        </select>
      </div>

      {/* Rating */}
      <div className="flex pt-3.">
        {Array.from({ length: 5 }, (_, index) => (
          <button
            key={index}
            className="p-1"
            onClick={() => updateRating(index + 1)}
          >
            <Icon
              size={22}
              alt="Star icon"
              className="size-[22px]"
              src={rating > index ? yellowStarIcon : grayStarIcon}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CreateCommentModalContent;
