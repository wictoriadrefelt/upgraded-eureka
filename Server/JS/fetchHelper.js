// Makes a request to php
console.log("hej");
export async function makeRequest(url, method, body) {
  console.log("fredriks log");
  try {
    let response = await fetch(url, {
      method,
      body,
    });
    let result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

/* Product */

// Fetches all products
export async function getAllProducts() {
  console.log("Wictorias log");
  const action = "getAll";
  let allProducts = await makeRequest(
    `./../api/receivers/productReceiver.php?action=${action}`,
    "GET"
  );

  return allProducts;
}

getAllProducts();
