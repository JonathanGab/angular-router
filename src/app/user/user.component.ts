import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
    isMajor: false,
  };

  constructor() {}

  ngOnInit(): void {}

  hideAge() {
    this.user.isMajor = !this.user.isMajor;
    console.log(this.user.isMajor);
  }
}
