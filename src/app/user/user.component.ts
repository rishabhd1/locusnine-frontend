import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserService } from '../services/user.service';

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
  dataSource: User[];

  constructor(public dialog: MatDialog, private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUsers().subscribe(response => {
      this.dataSource = response.body;
    });
  }

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
      this.getUser();
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(response => {
      if (response.status === 'success') {
        this.getUser();
      }
    });
  }
}
