import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Lottie (For stickers)
import Lottie from "lottie-react";

// Stickers
import sendSticker from "../assets/stickers/send-message.json";

const Success = () => {
  useEffect(() => {
    document.title = "Mene Market | Buyurtma muvaffaqiyatli qabul qilindi!";
  }, []);
  return (
    <div className="container space-y-5 pt-8 pb-12">
      <Lottie
        animationData={sendSticker}
        className="size-28 xs:size-32 sm:size-36 md:size-40"
      />

      {/* Title */}
      <h1>Muvaffaqiyatli!</h1>

      {/* Description */}
      <p className="text-neutral-500 text-lg sm:text-xl">
        So'rovingiz muvaffaqiyatli qabul qilindi. <br />
        Operatorlarimiz tez orada siz bilan bog'lanishadi.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-3.5 xs:gap-5">
        <Link to="/" className="btn-primary w-full h-11 rounded-full xs:w-48">
          Bosh sahifa
        </Link>
        <Link
          to={-1}
          className="btn-primary w-full h-11 rounded-full bg-gray-light text-primary-default border hover:bg-white xs:w-48"
        >
          Ortga qaytish
        </Link>
      </div>
    </div>
  );
};

export default Success;
