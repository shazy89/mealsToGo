import { mocks } from "./mock";
import camelize from "camelize";
export const restaurantsRequest = (location = "51.219448,4.402464") => {
  return new Promise((reslove, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    reslove(mock);
  });
};

const restaurantsTransform = (result) => {
  const newResult = camelize(result);
  return newResult;
};
restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.error(err);
  });
