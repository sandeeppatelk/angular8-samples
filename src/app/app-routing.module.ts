import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentListComponent } from "./department-list/department-list.component";
import { EmployeesListComponent } from "./employees-list/employees-list.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { ConditionsComponent } from "./conditions/conditions.component";
import { CommonFilterComponent } from "./common-filter/common-filter.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { DepartmentDetailComponent } from "./department-detail/department-detail.component";

import { from } from "rxjs";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "departments"
  },
  { path: "departments", component: DepartmentListComponent },
  { path: "departments:id", component: DepartmentDetailComponent },
  { path: "employees", component: EmployeesListComponent },
  { path: "employeeDetails", component: EmployeeDetailComponent },
  { path: "twoWayBinding", component: TwoWayBindingComponent },
  { path: "conditions", component: ConditionsComponent },
  { path: "commonFilters", component: CommonFilterComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomePageComponent,
  DepartmentListComponent,
  EmployeesListComponent,
  TwoWayBindingComponent,
  ConditionsComponent,
  CommonFilterComponent,
  DepartmentDetailComponent
];
