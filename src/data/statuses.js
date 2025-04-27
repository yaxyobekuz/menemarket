import timeIcon from "../assets/images/icons/pending-gradient.svg";
import crossIcon from "../assets/images/icons/cross-gradient.svg";
import successIcon from "../assets/images/icons/success-gradient.svg";

const statuses = [
  {
    label: "Kutilmoqda",
    value: "pending",
    color: "#eab308",
    icon: timeIcon,
  },
  {
    label: "Atkaz",
    value: "canceled",
    color: "red",
    icon: crossIcon,
  },
  {
    label: "Qaytarilgan",
    value: "rejected",
    color: "red",
    icon: crossIcon,
  },
  {
    label: "Yetkazib berildi",
    value: "success",
    color: "#27d627",
    icon: successIcon,
  },
  {
    label: "Noma'lum",
    value: "unknown",
    color: "#333333",
    icon: successIcon,
  },
];

export const getStatusByValue = (value) => {
  const defaultStatus = {
    label: "Noma'lum",
    value: "unknown",
    color: "#333333",
  };

  return (
    statuses.find((status) => status.value === value.toLowerCase()) ||
    defaultStatus
  );
};

export default statuses;
