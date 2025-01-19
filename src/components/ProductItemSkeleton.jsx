import { Skeleton } from "@/components/ui/skeleton";

const ProductItemSkeleton = () => {
  return (
    <li className="relative">
      {/* Image wrapper */}
      <div className="relative overflow-hidden mb-1.5 rounded-xl">
        <Skeleton className="w-full h-auto aspect-[3/4]" />
      </div>

      {/* Product details */}
      <div className="flex flex-col justify-between h-[88px] px-1.5">
        {/* title */}
        <div className="space-y-2">
          <Skeleton className="w-full h-3.5" />
          <Skeleton className="w-2/3 h-3.5" />
        </div>

        {/* bottom */}
        <div className="flex items-start justify-between">
          {/* price wrapper */}
          <div className="space-y-2">
            <Skeleton className="w-16 h-4" />
            <Skeleton className="w-32 h-4" />
          </div>

          {/* rating */}
          <Skeleton className="w-12 h-4" />
        </div>
      </div>
    </li>
  );
};

export default ProductItemSkeleton;
