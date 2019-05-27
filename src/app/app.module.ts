import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminMembershipsComponent } from './admin/admin-memberships/admin-memberships.component';
import { AdminModule } from './admin/admin.module';
import { MembersModule } from './members/members.module';
import { LoginComponent } from './session/login/login.component';
import { RegisterComponent } from './session/register/register.component';
import { PassRecoveryComponent } from './session/pass-recovery/pass-recovery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    AdminUsersComponent,
    AdminMembershipsComponent,
    LoginComponent,
    RegisterComponent,
    PassRecoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    MembersModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
