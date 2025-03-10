import React, { useState } from "react";

// Toaster (For notification)
import { notification } from "../notification";

const CopyButton = ({
  text,
  className = "",
  children = null,
  disabled = false,
  disabledDelay = 1500,
  notificationText = "Nusxa olindi",
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleCopyId = () => {
    setIsDisabled(true);

    navigator.clipboard
      .writeText(text)
      .then(() => notification.success(notificationText))
      .catch(() => notification.error("Nusxa olishda xatolik"));

    setTimeout(() => setIsDisabled(false), disabledDelay);
  };

  return (
    <button
      className={className}
      onClick={handleCopyId}
      disabled={disabled || isDisabled}
    >
      {children}
    </button>
  );
};

export default CopyButton;
