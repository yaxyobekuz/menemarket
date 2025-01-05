import React from "react";

const ToggleEyeButton = ({
  hide = false,
  iconSize = 32,
  iconClassName = "",
  onClick = () => {},
  className = "size-12",
  iconPrimaryColor = "#333333",
  iconSecondaryColor = "#f5f5f5",
}) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      <svg
        fill="none"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        className={iconClassName}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeWidth="1.5"
          strokeLinejoin="round"
          stroke={iconPrimaryColor}
          d="M8.55922 16.5915L5.51099 14.4577C3.80484 13.2634 3.80485 10.7366 5.511 9.5423L8.55923 7.40854C10.6251 5.9624 13.3749 5.9624 15.4408 7.40854L18.489 9.5423C20.1952 10.7366 20.1952 13.2634 18.489 14.4577L15.4408 16.5915C13.3749 18.0376 10.6251 18.0376 8.55922 16.5915Z"
        />
        <path
          strokeWidth="1.5"
          strokeLinejoin="round"
          stroke={iconPrimaryColor}
          d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
        />
        <g>
          <rect
            rx="1"
            x="17.6562"
            y="3.51465"
            height={20}
            width={hide ? 0 : 2}
            fill={iconSecondaryColor}
            transform="rotate(45 17.6562 3.51465)"
            className="transition-[width] duration-200"
          />
          <rect
            rx="1"
            x="19.0703"
            y="4.92871"
            height={20}
            width={hide ? 0 : 2}
            fill={iconPrimaryColor}
            transform="rotate(45 19.0703 4.92871)"
            className="transition-[width] duration-200"
          />
        </g>
      </svg>
    </button>
  );
};

export default ToggleEyeButton;
