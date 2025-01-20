import React from "react";

// Components
import { Skeleton } from "./ui/skeleton";

const BlogItemSkeleton = ({ data = {} }) => {
  return (
    <li className="w-full group">
      {/* Image */}
      <Skeleton className="w-full h-auto aspect-[5/3] rounded-xl mb-1.5" />

      {/* Title */}
      <div className="space-y-2 mb-2.5">
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-2/3 h-5" />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Skeleton className="w-full h-3.5" />
        <Skeleton className="w-full h-3.5" />
      </div>
    </li>
  );
};

export default BlogItemSkeleton;
