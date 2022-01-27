import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css'],
})
export class ForLoopComponent implements OnInit {
  users = ['ali', 'akram', 'asif', 'saqib', 'kamran', 'ikram', 'ahsan'];
  userDetails = [
    {
      id: 1,
      email: 'John@gmail.com',
      username: 'johnd',
      password: 'm38rmF$',
      account: ['gamil', 'linkedin', 'skype'],
      name: {
        firstname: 'John',
        lastname: 'Doe',
      },
      address: {
        city: 'kilcoole',
        street: '7835 new road',
        number: 3,
        zipcode: '12926-3874',
        geolocation: {
          lat: '-37.3159',
          long: '81.1496',
        },
      },
      phone: '1-570-236-7033',
    },
    /*...*/
    {
      id: 2,
      email: 'ALi@gmail.com',
      username: 'ali',
      password: 'm38rmF$',
      name: {
        firstname: 'ali',
        lastname: 'raza',
      },
      account: ['gamil', 'linkedin', 'skype'],
      address: {
        city: 'lahore',
        street: 'bor new road',
        number: 1,
        zipcode: '12926-3874',
        geolocation: {
          lat: '-37.3159',
          long: '81.1496',
        },
      },
      phone: '111111111111',
    },
    {
      id: 3,
      email: 'Saqib@gmail.com',
      username: 'saqib',
      password: 'm38rmF$',
      name: {
        firstname: 'saqib',
        lastname: 'javed',
      },
      account: ['gamil', 'linkedin', 'skype'],
      address: {
        city: 'lahore',
        street: 'bor new road',
        number: 3,
        zipcode: '12926-3874',
        geolocation: {
          lat: '-37.3159',
          long: '81.1496',
        },
      },
      phone: '2222222222222',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
