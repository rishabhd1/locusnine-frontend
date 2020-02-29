import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [AppComponent, UserComponent, AddUserComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddUserComponent]
})
export class AppModule {}
