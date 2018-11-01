import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [DataService]
})
export class AppComponent implements OnInit{
  active_users = [];
  inactive_users = [];

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.active_users = this.dataService.activeUsers;
    this.inactive_users = this.dataService.inactiveUsers;
  }
  
}
