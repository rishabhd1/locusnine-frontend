import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(UserComponent) addUserComp: UserComponent;

  title = 'locusnine-frontend';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addUserComp.getUser();
    });
  }
}
