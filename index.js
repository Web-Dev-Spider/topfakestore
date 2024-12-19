const fetchProducts = async function () {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Error in fetching product details");
    const products = await response.json();
    console.log(products);

    displayProducts(products);
  } catch (error) {
    console.log("Error catched", error);
  }
};

const displayProducts = function (products) {
  try {
    let productData = "";
    products.forEach((product) => {
      productData += `  <div class="col-lg-3 col-md-6 col-sm-9 row-gap-3">
            <div class="card">
            <div class="card-img-container">
            <img src="${product.image}" class="card-img-top p-2" alt="...">
            </div>
              <div class="card-body d-flex flex-column h-100">
                <h5 class="card-title">${
                  product.title.length > 60
                    ? product.title.slice(0, 60)
                    : product.title
                }</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  ${product.category}
                </h6>
                <p class="card-text flex-grow-1 text-muted">
                  ${product.description.slice(0, 120)}....
                </p>
                <div class="links d-flex align-items-end justify-content-between">
               <p class="fw-bold">$${product.price}</p>
                <a href="product-details.html?Id=${
                  product.id
                }" class="btn btn-primary">View Details</a>
                </div>
              </div>
            
            </div>
          </div>`;
    });

    document.getElementById("product-container").innerHTML = productData;
    document.getElementById("loading").style.display = "none";
  } catch (error) {
    console.log(error);
  }
};
fetchProducts();
