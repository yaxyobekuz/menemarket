// Components
import FormInputWrapper from "./FormInputWrapper";

const DonateModalContent = ({ updateFormData = () => {} }) => {
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
        name="amount"
        type="number"
        max={99999999}
        label="Qiymat *"
        placeholder="Minimal 1,000 so'm"
        onChange={(value) => handleInputChange("fund", value)}
      />
    </div>
  );
};

export default DonateModalContent;
