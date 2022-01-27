import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  show = '';
  userDate: any = {};
  getData(value: NgForm) {
    console.log(value);
    this.userDate = value;
    this.show = 'yes';
    console.log('show', this.show);
  }
  constructor() {}

  ngOnInit(): void {}
}
