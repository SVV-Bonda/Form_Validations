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
    name: ['', [Validators.required, Validators.pattern("^[a-zA-Z -']+")]],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ],
    ],
    email: ['',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    group: ['', Validators.required],
    city: ['', Validators.required],
    check: ['', Validators.required],
  });

  SaveFun() {
    console.log(this.testForm.value);
    this.formsubmit = !this.formsubmit;
  }

  formatPhone(value: string) {
    let formattedValue = '';
    value = value.replace(/[^\d]/g, ''); // remove non-numeric characters
    if (value.length > 0) {
      formattedValue = value.substring(0, 3);
    }
    if (value.length > 3) {
      formattedValue += '-' + value.substring(3, 6);
    }
    if (value.length > 6) {
      formattedValue += '-' + value.substring(6, 10);
    }
    this.testForm.value.phone = formattedValue;
    this.testForm.patchValue({ phone: formattedValue }, { emitEvent: false });
  }
}
