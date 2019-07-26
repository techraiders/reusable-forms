import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomFormControlsExampleComponent } from "./custom-form-controls-example/custom-form-controls-example.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [AppComponent, CustomFormControlsExampleComponent, SwitchComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
