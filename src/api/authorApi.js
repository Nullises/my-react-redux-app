import { handleResponse, handleError } from "./apiUtils";
// By educational purposes it's copied literally, but should be in a .env file
const baseUrl = "http://localhost:3001" + "/authors/";

export function getAuthors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
