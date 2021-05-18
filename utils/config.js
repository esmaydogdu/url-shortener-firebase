export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://shorten.esma.dev"
    : "http://localhost:3000";

export const serviceAccount = () => {
  if (process.env.SERVICE_ACCOUNT) {
    return JSON.parse(process.env.SERVICE_ACCOUNT);
  } else {
    return require("../serviceAccount.json");
  }
};
