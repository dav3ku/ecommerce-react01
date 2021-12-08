const URL = "https://fakestoreapi.com/products/";

export const getAllProducts = () => {
  return fetch(URL).then((res) => res.json());
};

export const getProduct = (ID) => {
  return fetch(URL + ID).then((resp) => resp.json());
};
