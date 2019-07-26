import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-reusable-forms-example",
  templateUrl: "./reusable-forms-example.component.html",
  styleUrls: ["./reusable-forms-example.component.scss"]
})
export class ReusableFormsExampleComponent {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      password: [],
      profile: []
    });
  }

  submit() {
    console.log(this.signupForm.value);
  }
}
