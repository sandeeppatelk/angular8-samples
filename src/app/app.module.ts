import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeeService } from "./employee.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, routingComponents],
  providers: [EmployeeService],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
