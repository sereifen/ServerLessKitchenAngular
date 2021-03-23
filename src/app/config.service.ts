import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Recipe } from "./Recipe";
import { map } from "rxjs/operators";
import { catchError } from "rxjs/operators";
import { Ingredient } from "./Ingredient";
import { CounterRecipes } from "./counter-recipes";
import { Optimization } from "./optimization";

@Injectable()
export class ConfigService {
  private configUrl: string;
  constructor(private http: HttpClient) {
    this.configUrl = "https://serverless-api.3rik.se/kitchen";
  }
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError("Something bad happened; please try again later.");
  }

  public OptimizeTotalWaste(): Observable<Optimization> {
    return this.http.get<Optimization>(
      this.configUrl + "/recipes/optimize-total-waste"
    );
  }

  public OptimizeTotalCount(): Observable<Optimization> {
    return this.http.get<Optimization>(
      this.configUrl + "/recipes/optimize-total-count"
    );
  }

  public GetCountByRecipe(): Observable<CounterRecipes[]> {
    return this.http.get<CounterRecipes[]>(
      this.configUrl + "/recipes/get-count-by-recipe"
    );
  }

  public Ping() {
    return this.http.get(this.configUrl + "/ping");
  }

  public GetRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.configUrl + "/recipes");
  }

  public GetRecipesById(id: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.configUrl + "/recipes/" + id);
  }

  public GetIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.configUrl + "/inventory");
  }

  public DeleteRecipe(id: string) {
    return this.http.delete(this.configUrl + "/recipes/" + id);
  }

  public Clear() {
    return this.http.post(this.configUrl + "/clear", "", this.httpOptions);
  }

  public CookRecipe(id: string) {
    return this.http.post<string>(
      this.configUrl + "/recipes/" + id + "/make",
      "",
      this.httpOptions
    );
  }

  public AddIngredients(ing: Ingredient[]) {
    return this.http.post<Recipe>(
      this.configUrl + "/inventory/fill",
      ing,
      this.httpOptions
    );
  }

  public AddRecipe(rec: Recipe) {
    return this.http.post<Recipe>(
      this.configUrl + "/recipes/create",
      rec,
      this.httpOptions
    );
  }

  public PatchRecipe(rec, id: string) {
    return this.http.patch<Recipe>(
      this.configUrl + "/recipes/" + id,
      rec,
      this.httpOptions
    );
  }
}
