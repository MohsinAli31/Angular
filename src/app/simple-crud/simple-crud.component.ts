import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-simple-crud',
  templateUrl: './simple-crud.component.html',
  styleUrls: ['./simple-crud.component.css'],
})
export class SimpleCrudComponent implements OnInit {
  show = '';
  disable = false;
  newRecord: any = [];
  updateData: any = [];
  userDate: any = [];
  list: any = [
    {
      firstName: 'Mohsin',
      lastName: 'Ali',
      email: 'ali@gmail.com',
      message: 'Helo Mohsin How are you?',
    },
    {
      firstName: 'Saqib',
      lastName: 'Ali',
      email: 'Saqib@gmail.com',
      message: 'Saqib ,what are you doing?',
    },
    {
      firstName: 'Kamran',
      lastName: 'Ali',
      email: 'Kamran@gmail.com',
      message: 'Kamran Wonderful work done',
    },
  ];
  getData(value: NgForm) {
    console.log(value);
    this.list.push(value);
    this.userDate = value;
    this.show = 'yes';
    console.log('list ', this.list);
  }
  delete(del: any) {
    console.log('delete key', del);
    this.list = this.list.filter((item: any) => item !== del);
  }
  update(key: any) {
    console.log('update key', key);
    // this.list = this.list.filter((item: any) => item !== del);
    this.disable = true;
    this.updateData = key;
    console.log('update data of', this.updateData);
  }
  recordUpdated(value: NgForm) {
    this.newRecord = value;

    console.log('new record', this.newRecord.email);
    for (let rec of this.list) {
      console.log(rec.id);
      if (rec == this.updateData) {
        // u.Description = 'Some description';
        rec.firstName = this.newRecord.firstName;
        rec.lastName = this.newRecord.lastName;
        rec.email = this.newRecord.email;
        rec.message = this.newRecord.message;
        console.log('record matched');
      }
    }
    // const editedList = this.list.map((rec: any) => {
    //   // if this task has the same ID as the edited task
    //   if (value == rec) {
    //     //
    //     console.log('record matched');
    //     // return { ...rec, firstName: 'Hi Mohsin' };
    //   }
    //   return rec;
    // });
    // console.log('edited list', editedList);
    // this.list = editedList;
  }
  constructor() {}

  ngOnInit(): void {}
}
