import React, { useEffect, useState } from "react";

// Components
import Icon from "./Icon";
import DonateItem from "./DonateItem";
import DotsLoader from "./DotsLoader";

// Services
import donateService from "@/api/services/donateService";

// Images
import reloadIcon from "../assets/images/icons/reload.svg";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateDonates } from "@/store/features/donateSlice";

const DonatesList = () => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const donates = useSelector((state) => state.donate.data);
  const [isLoading, setIsLoading] = useState(donates?.length === 0);

  // Load donates
  const loadDonates = () => {
    setHasError(false);
    setIsLoading(true);

    donateService
      .getDonates()
      .then((data) => dispatch(updateDonates(data)))
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (donates?.length === 0) loadDonates();
  }, []);

  return (
    <div>
      {!isLoading && !hasError && donates?.length && (
        <ul className="py-3.5">
          {donates.map((donate, index) => {
            return <DonateItem key={donate?._id || index} data={donate} />;
          })}
        </ul>
      )}

      {/* Loading animation */}
      {!hasError && isLoading && (
        <div className="py-20">
          <DotsLoader color="#0085FF" />
        </div>
      )}

      {/* Reload button */}
      {hasError && !isLoading && (
        <div className="flex justify-center py-16">
          <button
            title="Reload"
            className="p-1.5"
            aria-label="Reload"
            onClick={loadDonates}
          >
            <Icon src={reloadIcon} alt="Reload icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default DonatesList;
