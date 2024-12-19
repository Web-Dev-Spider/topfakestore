const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("Id");
const loadingEl = document.getElementById("loadingicon");
const getProduct = async function (productId) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    if (!response.ok) {
      throw new Error("Error in fetching product details");
    }
    const product = await response.json();
    console.log("Productsdfsdf", product);

    displayProduct(product);
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

const displayProduct = (product) => {
  document.getElementById(
    "product-container"
  ).innerHTML = ` <div class="card mb-3 p-5">
                  <div class="row g-0">
                    <div class="col-md-4 d-flex justify-conent-end">
                      <img src="${product.image}" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h3 class="card-title">${product.title}</h3>
                          <h6 class="card-subtitle mb-2 text-body-secondary">
                  ${product.category}
                </h6>
                       <p class="card-text flex-grow-1 text-muted ">
                  ${product.description}
                </p>
                <h5 class="fw-bold text-primary mt-4">$${product.price}</h5>
                <button class="btn btn-success">Buy Now</button>
                        <p class="card-text">
                          <small class="text-body-secondary"
                            >Last updated 3 mins ago</small
                          >
                        </p>
                      </div>
                    </div>
                  </div>    
                </div>
                 <a href="index.html"><button class="btn btn-primary m-auto">Go back</button></a> `;
  loadingEl.style.display = "none";
};
getProduct(productId);
