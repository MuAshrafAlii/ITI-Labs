import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  validationForm = new FormGroup({
    name: new FormControl(null, Validators.minLength(3)),
    age: new FormControl(null, [Validators.min(20), Validators.max(40)]),
    email: new FormControl(null, Validators.email),
  });

  get validName() {
    return this.validationForm.controls['name'].valid;
  }

  get validAge() {
    return this.validationForm.controls['age'].valid;
  }

  get validEmail() {
    return this.validationForm.controls['email'].valid;
  }

  submitHandler() {
    if (this.validationForm.valid) {
      alert('Registeration Succeeded');
    } else {
      alert('Please Fix errors to be able to register');
    }
  }
}
