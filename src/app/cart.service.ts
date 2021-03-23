import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = {};

  addToCart(product, n: number) {
    if (!(product.name in this.items)) this.items[product.name] = 0;
    this.items[product.name] = this.items[product.name] + n;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = {};
    return this.items;
  }
}
