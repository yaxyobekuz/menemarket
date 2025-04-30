import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  useEffect(() => {
    document.title = "Mene Market | Sahifa topilmadi";
  }, []);

  return (
    <div className="flex items-center justify-center fixed inset-0 size-full">
      <div className="flex flex-col items-center gap-5">
        <h1 className="">Sahifa topilmadi!</h1>
        <Link to="/" className="btn-primary px-5 h-11">
          Bosh sahifa
        </Link>
      </div>
    </div>
  );
};

export default Page404;
