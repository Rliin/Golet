let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
     <a href="product.html?id=${product.id}" class="listing js-listing">
        <div>
          <img class="product-picture" src="${product.image}">
        </div>

        <div class="listing-text">
          <div class="listing-title-price">
            <div>
              <p class="listing-title">${product.name}</p>
            </div>
            <div>
              <p class="listing-price">${(product.priceKurus)/100}TL</p>
            </div>
          </div>

          <div class="listing-location-container">
            <div>
              <img class="marker-icon" src="visuals/icons/marker.svg">
            </div>
            <div>
              <p class="listing-location">${product.location}</p>
            </div>
          </div>
        </div>
    </a>
  `;
});

document.querySelector('.js-listing-grid').innerHTML = productsHTML;

/*document.querySelectorAll('.js-listing')
  .forEach((button) => {
    button.addEventListener('click', () => {
      productId = button.dataset.productId;
      console.log(productId);
    });
  });*/

