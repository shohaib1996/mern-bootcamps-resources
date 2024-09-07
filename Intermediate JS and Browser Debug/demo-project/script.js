const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");

searchInput.addEventListener("input", () => {
  const query = searchInput.value;

  if (query) {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${query}.json`)
      .then((res) => res.json())
      .then((data) => {
        const productName = data.product.abbreviated_product_name;
        const productDesc = data.product.generic_name;

        resultsList.innerHTML = `<li>${productName} <br/> ${productDesc} </li>`;
      })
      .catch((err) => console.log(err));
  }
});
