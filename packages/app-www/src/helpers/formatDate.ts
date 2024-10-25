export const formatDate = (timestamp: string) => {
  return new Date(timestamp).toLocaleDateString("fr", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
