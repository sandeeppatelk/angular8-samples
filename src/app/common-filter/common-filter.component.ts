import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-common-filter",
  templateUrl: "./common-filter.component.html",
  styles: []
})
export class CommonFilterComponent implements OnInit {
  public colors = ["red", "blue", "green", "yellow"];
  public name = "welcome Sandeep";
  public person = { firstName: "sandeep", lastName: "Patel" };
  public date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
