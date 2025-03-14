// Components
import Icon from "./Icon";

// Redux
import { useSelector } from "react-redux";

// Images
import verifiedIcon from "../assets/images/icons/verify.svg";

const VerifiedIcon = ({ type = "medium", className = "", as = "user" }) => {
  const options = () => {
    switch (type) {
      // Large
      case "large":
        return {
          size: 28,
          className: "ml-1 mb-0.5 size-5 sm:size-6 md:size-7",
        };

      // Medium
      case "medium":
        return {
          size: 24,
          className: "ml-1 mb-0.5 size-5 sm:mb-[3px] sm:size-6",
        };

      // Small
      case "small":
        return {
          size: 20,
          className: "ml-1 mb-0.5 size-4 sm:mb-[3px] sm:size-5",
        };

      // Extra Small
      case "extrasmall":
        return {
          size: 17,
          className: "ml-0.5 mb-0.5 size-4 xs:size-[17px]",
        };

      // Default
      default:
        return {
          size: 24,
          className: "ml-1 mb-0.5 size-5 sm:mb-[3px] sm:size-6",
        };
    }
  };

  const { check: isVerified } = useSelector((state) => state.user.data) || {};

  return (as === "user" ? isVerified : as) ? (
    <Icon
      src={verifiedIcon}
      size={options().size}
      alt="Tasdiqlanganlik belgisi"
      className={`inline-block ${options().className} ${className}`}
    />
  ) : null;
};

export default VerifiedIcon;
