import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  template: ` <p class="color">student (using inline template)</p> `,
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
