import { cn } from "@/lib/utils";

const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-light",
        className
      )}
      {...props}
    />
  );
};

export { Skeleton };
