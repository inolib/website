export const getCookie = (name: string) => {
  const matches = new RegExp(`${name}=([^;]*);`).exec(globalThis.document.cookie);

  return matches === null ? undefined : matches[1];
};
