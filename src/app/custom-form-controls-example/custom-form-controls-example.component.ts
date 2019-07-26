import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-custom-form-controls-example",
  templateUrl: "./custom-form-controls-example.component.html"
})
export class CustomFormControlsExampleComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      mySwitch: [true]
    });
  }

  submit() {
    console.log(`Value: ${this.myForm.controls.mySwitch.value}`);
  }
}
