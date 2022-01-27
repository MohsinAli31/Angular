import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  title = 'Angular counter app';
  count = 0;
  // getCounter() {
  //   this.count++;
  // }
  getCounter(input: any) {
    // this.count++;
    console.log('input:', input);
    input === 'add' ? this.count++ : this.count--;
    console.log('count :', this.count);
  }

  constructor() {}
  ngOnInit(): void {}
}
