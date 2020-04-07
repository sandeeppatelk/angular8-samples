import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-department-list",
  template: `
    <hr />
    <h1>Department List</h1>
    ngFor
    <ul>
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span>{{ department.id }} </span>{{ department.name }}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  constructor(private router: Router) {}
  public departments = [
    { id: 1, name: "Information technology" },
    { id: 2, name: "Administration" },
    { id: 3, name: "Networking" },
    { id: 4, name: "humanResource" }
  ];

  ngOnInit(): void {}

  onSelect(department) {
    this.router.navigate(["/departments", department.id]);
  }
}
