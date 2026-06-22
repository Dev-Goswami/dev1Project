import { totalCartItem } from "../data/cart.js";

export function renderHeader() {
  const headerHtml = `
     <div class="amazon-header-left-section">
        <a href="index.html" class="header-link">
        <div class="logoImageContainer">
          <img class="amazon-logo"
           src="images/apniDukaan-logo.png">
           <span class='logoText'>Apni Dukaan</span>
        </div>
     
        </a>
      </div>

      <div class="amazon-header-middle-section">
      
        <input class="search-bar" type="text" placeholder="Search">

        <button class="search-button">
          <img class="search-icon" src="images/icons/search-icon.png">
        </button>
      </div>

      <div class="amazon-header-right-section">
        <a class="orders-link header-link" href="orders.html">
          <span class="returns-text">Returns</span>
          <span class="orders-text">& Orders</span>
        </a>

        <a class="cart-link header-link" href="checkout.html">
         <i class="fa-solid cart-icon fa-cart-shopping"></i>
          <div class="cart-quantity total-items-in-cart">${totalCartItem()}</div>
  
          <div class="cart-text">Cart</div>
        </a>
      </div>`;

  return headerHtml;
}
