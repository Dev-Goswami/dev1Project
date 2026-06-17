import {
  updateOrderSummary,
  orderSummaryClickEvent
} from "./orderSummary.js";
import { loadProducts } from "../../data/products.js";
// import "./backendPrectic.js";
import '../../utils/bootstrap.js';

loadProducts(()=>{

    updateOrderSummary();

    document
      .querySelector(".js-order-summary")
      .addEventListener("click", orderSummaryClickEvent);
});