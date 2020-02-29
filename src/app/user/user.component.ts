import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns = [
    'name',
    'email',
    'roleType',
    'mobile',
    'status',
    'options'
  ];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}

  getName(name: string) {
    let changedName: string = name.charAt(0).toUpperCase() + name.slice(1);
    changedName = changedName.split(/(?=[A-Z])/).join(' ');
    return changedName.toUpperCase();
  }

  updateUser(id: string) {
    console.log(`ID: ${JSON.stringify(id)}`);
  }

  deleteUser(id: string) {
    console.log(`DELETE: ${JSON.stringify(id)}`);
  }
}

const ELEMENT_DATA: User[] = [
  {
    _id: '123',
    name: 'Rishabh',
    email: 'rishabh@gmail.com',
    roleType: 'Admin',
    mobile: 9923251513,
    status: true
  },
  {
    _id: '345',
    name: 'John Doe',
    email: 'john@doe.com',
    roleType: 'Custmoer Executive',
    mobile: 9923251511,
    status: false
  }
];
