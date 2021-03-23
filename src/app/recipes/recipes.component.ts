import { Component, OnInit } from "@angular/core";
import { Recipe } from "../Recipe";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  public columns = ["Recipe Id", "Name", "Instructions"];
  public index = ["id", "name", "instructions"];

  public recipes: Recipe[];

  constructor(private api: ConfigService) {}

  ngOnInit() {
    this.api.GetRecipes().subscribe(rec => {
      this.recipes = rec;
    });
  }
  DeleteRecipe(id: string) {
    this.api.DeleteRecipe(id).subscribe(rec => {
      console.log(rec);
    });
  }

  updateList(id: string, property: string, event: any) {
    const editField = event.target.textContent;
    var actu = {};
    actu[property] = editField;
    this.api.PatchRecipe(actu, id).subscribe(rec => {
      console.log(rec);
    });
  }

  CookRecipe(id: string) {
    this.api.CookRecipe(id).subscribe(
      rec => {
        window.alert(rec);
      },
      err => {
        console.log(err);
        if (err.status == 400)
          window.alert("Your recipe needs more Ingredients");
        if (err.status == 404) window.alert("The recipe doesnt exists");
      }
    );
  }

  EditRecipe(id: string) {}
}
