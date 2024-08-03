// Get the base URL for the current environment.
export const getBaseUrl = () => {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://harrishbutler.com";
};
