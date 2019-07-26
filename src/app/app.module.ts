import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReusableFormsExampleComponent } from "./reusable-forms-example/reusable-forms-example.component";
import { ProfileFormComponent } from "./profile-form/profile-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PasswordFormComponent } from './password-form/password-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReusableFormsExampleComponent,
    ProfileFormComponent,
    PasswordFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
