"use client";

type BlogPaginationProps = {
  currentPage: number;
  totalPages?: number;
  onPageChange: (newPage: number) => void;
};

export const BlogPagination = ({ currentPage, totalPages = 1, onPageChange }: BlogPaginationProps) => {
  // Ensure isLast is true when totalPages is 0 to disable "Suivant" button
  const safeTotalPages = Math.max(1, totalPages);
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  return (
    <nav
      className="flex items-center justify-between border-t border-gray-300 pt-4"
      role="navigation"
      aria-label="Navigation de pagination"
    >
      <button
        type="button"
        className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-400 px-6 py-2 text-gray-700 disabled:opacity-50"
        disabled={isFirst}
        aria-disabled={isFirst}
        aria-label="Page précédente"
        onClick={() => onPageChange(currentPage - 1)}
      >
        <span aria-hidden="true">←</span>
        <span>Précédent</span>
      </button>

      <p className="font-medium text-gray-800" aria-live="polite" aria-atomic="true">
        Page {currentPage} sur {safeTotalPages}
      </p>

      <button
        type="button"
        className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-400 px-6 py-2 text-gray-700 disabled:opacity-50"
        disabled={isLast}
        aria-disabled={isLast}
        aria-label="Page suivante"
        onClick={() => onPageChange(currentPage + 1)}
      >
        <span>Suivant</span>
        <span aria-hidden="true">→</span>
      </button>
    </nav>
  );
};
