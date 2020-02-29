import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';

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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  getName(name: string) {
    let changedName: string = name.charAt(0).toUpperCase() + name.slice(1);
    changedName = changedName.split(/(?=[A-Z])/).join(' ');
    return changedName.toUpperCase();
  }

  updateUser(user: User) {
    const dialogData = {
      title: 'update',
      user
    };

    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '450px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
    roleType: 'Customer Executive',
    mobile: 9923251511,
    status: false
  }
];
