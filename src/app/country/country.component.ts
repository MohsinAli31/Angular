import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  template: `
    <p class="color">country (using inline style and inline template)!</p>
  `,
  styles: [
    `
      .color {
        color: green;
      }
    `,
  ],
})
export class CountryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
