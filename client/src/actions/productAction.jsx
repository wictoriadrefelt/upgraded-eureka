// Get Products Details
export const getProducts = () => async (async) => {
  const { data } = await axios.get(`/api/v1/products`);
  console.log(data);
};
