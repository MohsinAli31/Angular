import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Raza';
  displayValue = '';
  //now number and string both can work ,use any for any any type of data to pass
  // getName(name: string | number) {
  //   console.log('entered value:', name);
  // }
  getValue(value: any) {
    this.displayValue = value;
  }
}
