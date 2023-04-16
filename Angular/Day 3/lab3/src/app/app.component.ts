import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lab3';
  studentsArray: object[] = [];

  parentData = this.studentsArray;

  getData(data: any) {
    this.studentsArray.push(data);
    console.log(this.studentsArray);
  }
}
