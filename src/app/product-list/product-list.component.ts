import { Component, OnInit } from "@angular/core";

import { ingredientes } from "../ingredientes";
import { ActivatedRoute } from "@angular/router";

import { CartService } from "../cart.service";
import { Ingredient } from "../Ingredient";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  ingredientes = ingredientes;
  theValue = {};
  public columns = ["name", "quantity"];

  public ingredientsList: Ingredient[] = [];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private api: ConfigService
  ) {}
  ngOnInit(): void {
    this.api.GetIngredients().subscribe(rec => {
      this.ingredientsList = rec;
      //console.log(rec);
    });
  }

  addToCart(ingrediente, quantity) {
    if (quantity != null && quantity != "") {
      this.cartService.addToCart(ingrediente, quantity);
      window.alert("Your product has been added to the cart!");
    } else window.alert("Try to add 0 items to the list has no sens");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
