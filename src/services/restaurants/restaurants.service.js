import { mocks } from "./mock";
export const restaurantsRequest = (location = "51.219448,4.402464") => {
  return new Promise((reslove, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    reslove(mock);
  });
  //  console.log(mocks[location]);
};
restaurantsRequest()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
