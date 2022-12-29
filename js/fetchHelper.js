// Makes a request to php
export async function makeRequest(url, method, body) {
  try {
    let response = await fetch(url, {
      method,
      body,
    });
    console.log(response);
    let result = await response.json();
    console.log(typeof result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

/* Product */

// Fetches all products
export async function getAllProducts() {
  const action = "getAll";
  console.log("maybe");
  let allProducts = await makeRequest(
    `./../Server/receivers/productReceiver.php?action=${action}`,
    "GET"
  );
  console.log(allProducts);
  return allProducts;
}

// Fetch a product based on productId
export async function getProductFromId(id) {
  const action = "getById";
  console.log("baby");
  let specificProduct = await makeRequest(
    `./../api/receivers/productReceiver.php?action=${action}&id=${id}`,
    "GET"
  );
  console.log(specificProduct);
  return specificProduct;
}
