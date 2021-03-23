import { Component, OnInit } from "@angular/core";

import { CartService } from "../cart.service";
import { ConfigService } from "../config.service";
import { Ingredient } from "../Ingredient";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(private cartService: CartService, private api: ConfigService) {}

  mySortingFunction = (a, b) => {
    return a.key;
  };

  completeCart() {
    var ing: Ingredient[] = [];
    for (var key in this.items) {
      ing.push(new Ingredient(key, this.items[key]));
    }
    console.log(ing);
    this.api.AddIngredients(ing).subscribe(rec => {
      console.log(rec);
    });
    window.location.href = "./ingredients";
  }
  DeleteFromCart(ingredient) {
    delete this.items[ingredient];
  }

  ngOnInit() {}
}
