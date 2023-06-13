import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private fb: FormBuilder) {}

  testForm = this.fb.group({
    name: [''],
    phone: [''],
    email: [''],
    city: [''],
    active: [''],
  });

  SaveFun() {
    console.log(this.testForm);
  }
}
