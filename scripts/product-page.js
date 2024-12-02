const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const product = products.find(p => p.id === productId);
console.log(productId);
console.log(product.name);

let productHTML = `
  <div class="product-page-picture-container">
          <img class="product-page-picture" src="${product.image}">
          <img class="button-favorite" src="visuals/icons/circle-heart.png"></button>
        </div>
        <div class="product-page-info-text">
          <div class="product-page-product-title">
            ${product.name}
          </div>
          <div class="product-page-info-price">
            ${(product.priceKurus)/100}TL
          </div>
          <div class="product-page-location-time-stamp">
            <div class="product-page-location-container">
              <img class="marker-icon" src="visuals/icons/marker.svg"> </img>
              <div class="product-page-location">
                ${product.location}
              </div>
            </div>
            <div class="product-time-stamp">
              ${product.view} views &#183; ${product.time}
            </div>
          </div>
          <div class="product-about-container">
            <div class="product-about-title">
              About this item
            </div>
            <div class="product-about-text">
              Brand SteelSeries
              Compatible Devices Gaming Console
              Connectivity Technology wired
              Keyboard Description Mechanical, Gaming
              Recommended Uses For Product Gaming
              Special Feature Ergonomic
              Color Black
              Number of Keys 104
              Keyboard backlighting color support RGB
              Style Wired
            </div>
          </div>
          <div class="product-features-container">
            <div class="product-features-title">
              Product information
            </div>
            <div class="product-features">
              <div class="product-feature-title">IN</div>
              <div class="product-feature-text">${product.id}</div>
            </div>
            <div class="product-features">
              <div class="product-feature-title">Categories</div>
              <div class="product-feature-text">${product.keywords}</div>
            </div>
            <div class="product-features">
              <div class="product-feature-title">Brand</div>
              <div class="product-feature-text">Steel Series</div>
            </div>
            <div class="product-features">
              <div class="product-feature-title">Condition</div>
              <div class="product-feature-text">New without tags</div>
            </div>
            <div class="product-features">
              <div class="product-feature-title">Color</div>
              <div class="product-feature-text">Black</div>
            </div>
            <div class="product-features">
              <div class="product-feature-title">Connectivity Technology</div>
              <div class="product-feature-text">wired</div>
            </div>
          </div>
        </div>
        <div class="product-page-info-card">
          <div class="seller-info">
            <img class="seller-profile-picture" src="visuals/profile-pictures/profile-picture1.jpg">
          </img>
            <div class="seller-info-text">
              <div class="seller-name">
                  BCG Gaming Electronics
              </div>
              <div class="seller-account-date">
                Member since April 2017
              </div>
            </div>
          </div>
          <div class="chat-offer-buttons">
            <button class="button-chat">
              <img class="comment-icon" src="visuals/icons/comment.svg">
              Chat with the seller
            </button>
            <button class="button-offer">
              <img class="coins-icon" src="visuals/icons/coins.svg">Make an offer
            </button>
            <button class="button-phone">
              <img class="coins-icon" src="visuals/icons/phone-call.svg">Reveal phone number
            </button>
            <button class="button-map">
              <img class="coins-icon" src="visuals/icons/marker-white.svg">See the location
            </button>
            <button class="button-seller-account">
              <img class="coins-icon" src="visuals/icons/seller.svg">
              Seller's Account
            </button>
            <button class="button-complain">
              <img class="coins-icon" src="visuals/icons/flag.svg">Report an issue with this product or seller
            </button>
          </div>
        </div>
`;

if (product) {
  document.querySelector('.js-product-page-panels').innerHTML = productHTML
}