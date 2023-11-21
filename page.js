let url = "https://fakestoreapi.com/products";
let container = document.getElementById("container");
async function getProducts() {
  let response = await fetch(url);
  let products = await response.json();
  console.log(products);
  let contentToDisplay = products
    .map((product) => {
      return `<div class="product-card">
        <img src=${product.image} alt="Product Image" class="img" />
                <div class="product-other">
            <p class="product-title">Title: ${product.title.substr(0, 20)}</p>
            <p class="product-description">
                Description: ${product.description.substr(0, 100).concat("...")}
            </p>
            <div class="product-flex"> 
                <p class="product-price">price:$${product.price}</p>
                <p class="product-stock">stock:${product.rating.count}</p>
            </div>

        </div>
        
    </div>`;
    })
    .join("");
  container.innerHTML = contentToDisplay;
}
getProducts();
