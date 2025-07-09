export const getMediaUrl = (media: any) => {
  console.log("media", media);

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  return media?.url ? baseUrl + media?.url : "";
};
