import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-two-way-binding",
  template: `
    <p>
      two-way-binding works!
    </p>
    <input [(ngModel)]="name" type="text" />{{ name }}
  `,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {
  constructor() {}
  public name = "";

  ngOnInit(): void {}
}
