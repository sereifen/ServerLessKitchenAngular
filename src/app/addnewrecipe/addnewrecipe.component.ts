import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ConfigService } from "../config.service";
import { ingredientes } from "../ingredientes";
import { Recipe } from "../Recipe";

@Component({
  selector: "app-addnewrecipe",
  templateUrl: "./addnewrecipe.component.html",
  styleUrls: ["./addnewrecipe.component.css"]
})
export class AddnewrecipeComponent implements OnInit {
  ingredientsList = ingredientes;
  checkoutForm = this.FormBuilder.group({
    name: "",
    instructions: ""
  });
  constructor(private FormBuilder: FormBuilder, private api: ConfigService) {}

  ngOnInit() {}

  onSubmit() {
    var ingredientsOnRecipe = [];
    var table = document.getElementById("TableValues") as HTMLTableElement;
    for (var i = 0, row; (row = table.rows[i]); i++) {
      var ingredientname = "";
      var ingredientquantity = 0;
      for (var j = 0, col; (col = row.cells[j]); j++) {
        if (j == 0) ingredientname = col.innerHTML;
        if (col.firstChild.value != "")
          ingredientquantity = col.firstChild.value;
      }
      if (ingredientquantity != null && ingredientquantity > 0)
        ingredientsOnRecipe.push({
          name: ingredientname,
          quantity: ingredientquantity
        });
    }
    if (ingredientsOnRecipe.length <= 0)
      window.alert("You cant add a recipe without ingredients!");
    else {
      var send: Recipe = new Recipe(
        0,
        this.checkoutForm.value.name,
        this.checkoutForm.value.instructions,
        ingredientsOnRecipe
      );
      this.api.AddRecipe(send).subscribe(rec => {
        console.log(rec);
      });
      window.location.href = "./recipes";
    }
  }
}
