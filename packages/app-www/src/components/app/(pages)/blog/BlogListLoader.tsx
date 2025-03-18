export const BlogPostSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="animate-pulse overflow-hidden rounded-2xl bg-white-100 p-4">
          {/* Image Placeholder */}
          <div className="h-[200px] w-full rounded bg-gray-200"></div>

          <div className="mt-4 space-y-3">
            {/* Categories Placeholder */}
            <div className="h-6 w-24 rounded-full bg-gray-300"></div>

            {/* Title Placeholder */}
            <div className="h-6 w-3/4 rounded bg-gray-400"></div>

            {/* Excerpt Placeholder */}
            <div className="h-4 w-full rounded bg-gray-300"></div>
            <div className="h-4 w-5/6 rounded bg-gray-300"></div>
            <div className="h-4 w-2/3 rounded bg-gray-300"></div>

            {/* Author Section */}
            <div className="mt-4 flex items-center gap-3">
              <div className="size-10 rounded-full bg-gray-300"></div>
              <div className="flex flex-col space-y-1">
                <div className="h-4 w-24 rounded bg-gray-400"></div>
                <div className="h-3 w-16 rounded bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
