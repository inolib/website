"use client";

type BlogPaginationProps = {
  currentPage: number;
  totalPages?: number;
  onPageChange: (newPage: number) => void;
};

export const BlogPagination = ({ currentPage, totalPages = 1, onPageChange }: BlogPaginationProps) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-300 pt-4">
      <button
        className="cursor-pointer rounded-lg border border-gray-400 px-6 py-2 text-gray-700 disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ← Previous
      </button>
      <p className="font-medium text-gray-800">
        Page {currentPage} sur {totalPages}
      </p>
      <button
        className="cursor-pointer rounded-lg border border-gray-400 px-6 py-2 text-gray-700 disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next →
      </button>
    </div>
  );
};
