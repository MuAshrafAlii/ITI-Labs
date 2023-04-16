import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  name = '';
  age = '';
  regData = 'data from reg';

  @Output() myEvent = new EventEmitter();

  addStudentHandler() {
    if (this.name.length < 3) {
      alert('Name must be atleast 3 letters');
      return;
    }

    if (+this.age < 20 || +this.age > 40) {
      alert('Age must be between 20 & 40');
      return;
    }

    let studentObject = {
      name: this.name,
      age: this.age,
    };

    this.name = '';
    this.age = '';

    this.myEvent.emit(studentObject);
  }
}
