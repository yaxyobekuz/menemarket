// Components
import { Skeleton } from "./ui/skeleton";

const ProductCommentsSkeleton = () => {
  return (
    <div className="flex flex-col-reverse items-start gap-5 md:flex-row">
      {/* Reviews */}
      <div className="w-full min-w-0">
        <ul className="space-y-5">
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <li
                key={index}
                className="flex items-start gap-3.5 w-full bg-white p-3.5 rounded-xl border xs:p-4 xs:gap-4 sm:p-5 sm:gap-5"
              >
                {/* User avatar */}
                <Skeleton className="size-10 shrink-0 rounded-full xs:size-11 sm:size-12" />

                {/* details */}
                <div className="w-full space-y-2.5">
                  <div className="flex items-center justify-between pb-1">
                    <Skeleton className="w-20 h-4 xs:h-5 xs:w-28" />

                    {/* rating */}
                    <Skeleton className="w-28 h-4" />
                  </div>

                  {/* description */}
                  <div className="space-y-2">
                    <Skeleton className="w-full h-3 xs:h-4" />
                    <Skeleton className="w-full h-3 xs:h-4" />
                    <Skeleton className="w-2/3 h-3 xs:h-4" />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Rating */}
      <div className="w-full space-y-5 md:max-w-md md:min-w-96">
        <div className="w-full p-3.5 space-y-5 rounded-xl border xs:p-4 sm:p-5">
          {/* header */}
          <div className="flex items-center justify-between">
            <Skeleton className="w-20 h-4 xs:h-5 xs:w-28" />

            <Skeleton className="w-28 h-4" />
          </div>

          {/* body */}
          <ul className="space-y-3">
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <li key={index} className="flex items-center gap-3.5">
                  <Skeleton className="size-5" />
                  <Skeleton className="grow h-3 rounded-full xs:h-4" />
                  <Skeleton className="w-7 h-5" />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Open add review modal btn */}
        <Skeleton className="w-full h-11 rounded-lg" />
      </div>
    </div>
  );
};

export default ProductCommentsSkeleton;
