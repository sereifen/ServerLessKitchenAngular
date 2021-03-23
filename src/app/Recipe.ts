import { Ingredient } from "./Ingredient";

export class Recipe {
  public id: string;
  public name: string;
  public instructions: string;
  public ingredients: Ingredient[];

  constructor(id, name, instructions, ingredients) {
    this.id = id;
    this.name = name;
    this.instructions = instructions;
    this.ingredients = ingredients;
  }
}
