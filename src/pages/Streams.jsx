import React, { useEffect, useState } from "react";

// Components
import Icon from "../components/Icon";
import DotsLoader from "../components/DotsLoader";
import StreamItem from "../components/StreamItem";

// Services
import streamService from "../api/services/streamService";

// Images
import reloadIcon from "../assets/images/icons/reload.svg";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateStreams } from "../store/features/streamsSlice";

const Streams = () => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const allStreams = useSelector((state) => state.streams.data);

  const loadStreams = () => {
    setHasError(false);
    setIsLoading(true);

    streamService
      .getStreams()
      .then((streams) => dispatch(updateStreams(streams)))
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (allStreams?.length === 0) {
      loadStreams();
    } else {
      setTimeout(() => setIsLoading(false), 500);
    }
  }, []);

  return (
    <div className="w-full pt-3.5 pb-8">
      <div className="container max-sm:px-1">
        <div className="bg-gradient-gray rounded-xl">
          {/* Title */}
          <div className="flex items-center h-[60px] px-2.5 sm:px-4">
            <h1 className="text-2xl">
              <span>Oqimlar </span>
              <span className="inline-block font-medium text-neutral-400 scale-90">
                ({allStreams?.length || 0})
              </span>
            </h1>
          </div>

          {/* Line */}
          <div className="h-0.5 w-full bg-white" />

          {/* Streams */}
          {!hasError && !isLoading && allStreams?.length > 0 ? (
            <ul className="grid grid-cols-1 gap-3.5 px-2.5 py-5 sm:px-4 xs:grid-cols-2 sm:gap-4 xl:grid-cols-3 2xl:grid-cols-4">
              {allStreams.map((stream) => (
                <StreamItem key={stream._id} data={stream} />
              ))}
            </ul>
          ) : null}

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
                onClick={loadStreams}
              >
                <Icon src={reloadIcon} alt="Reload icon" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Streams;
