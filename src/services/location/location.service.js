import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = () => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!location) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formmattedResponse = camelize(result);
  const { geometry = {} } = formmattedResponse.result[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
