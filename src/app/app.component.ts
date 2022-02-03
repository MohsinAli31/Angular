import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  list: any;
  constructor(private userData: UserDataService) {
    this.userData.getUsers().subscribe((data) => {
      console.log('data from api:', data);
      this.list = data;
      console.log('list here', this.list);
    });
  }
  title = 'angularRouting';
}
