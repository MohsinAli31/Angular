import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string } | any;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.router.snapshot.params['id'],
      name: this.router.snapshot.params['name'],
    };
    this.router.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
    console.log('router', this.router);
  }
}
