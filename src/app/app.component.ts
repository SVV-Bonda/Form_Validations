import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  formsubmit = false;

  constructor(private fb: FormBuilder) {}

  testForm = this.fb.group({
    name: ['', Validators.required, Validators.pattern("^[a-zA-Z -']+")],
    phone: [
      '',
      Validators.required,
      Validators.pattern(/^\d{3}-\d{3}-\d{4}$/),
      Validators.maxLength(10),
    ],
    email: ['', Validators.required, Validators.email],
    group: ['', Validators.required],
    city: ['', Validators.required],
    check: ['', Validators.required],
  });

  SaveFun() {
    console.log(this.testForm.value);
    this.formsubmit = true;
  }
}
