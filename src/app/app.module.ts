import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { ProductListComponent } from "./product-list/product-list.component";
import { CartService } from "./cart.service";
import { HttpClientModule } from "@angular/common/http";
import { CartComponent } from "./cart/cart.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AddnewrecipeComponent } from "./addnewrecipe/addnewrecipe.component";
import { ConfigService } from "./config.service";

@NgModule({
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: "", component: WelcomeComponent },
      { path: "addnewrecipe", component: AddnewrecipeComponent },
      { path: "ingredients", component: ProductListComponent },
      { path: "cart", component: CartComponent },
      { path: "recipes", component: RecipesComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    CartComponent,
    RecipesComponent,
    WelcomeComponent,
    AddnewrecipeComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService, ConfigService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
