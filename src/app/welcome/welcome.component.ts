import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  constructor(private api: ConfigService) {}

  ngOnInit() {}

  ping() {
    this.api.Ping().subscribe(
      rec => {
        window.alert(rec);
      },
      err => {
        if ((err.status = 200)) window.alert("Pong");
        else console.log(err);
      }
    );
  }
  OptimizeWaste() {
    this.api.OptimizeTotalWaste().subscribe(rec => {
      console.log(rec);
    });
  }

  OptimizeCount() {
    this.api.OptimizeTotalCount().subscribe(rec => {
      console.log(rec);
    });
  }

  CountByRecipe() {
    this.api.GetCountByRecipe().subscribe(rec => {
      console.log(rec);
    });
  }

  clear() {
    this.api.Clear().subscribe(rec => {
      window.alert("All has been clear");
    });
  }
}
