import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostUser } from '../models/PostUser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  title = 'add user';
  name: string;
  email: string;
  roleType = 'Admin';
  mobile: number;

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.data && this.data.title === 'update') {
      this.title = 'update user';
      this.name = this.data.user.name;
      this.email = this.data.user.email;
      this.roleType = this.data.user.roleType;
      this.mobile = this.data.user.mobile;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  addUser() {
    const payload: PostUser = {
      name: this.name,
      email: this.email,
      roleType: this.roleType,
      mobile: this.mobile
    };

    this.userService.postUser(payload).subscribe(response => {
      if (response.status === 'success') {
        this.dialogRef.close();
      }
    });
  }
}
