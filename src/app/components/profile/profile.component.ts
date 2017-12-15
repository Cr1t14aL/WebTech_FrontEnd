import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from "../../Models/user.model";
import { UserService } from '../../services/user.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Session } from '../../Models/session.model';
import { auth } from '../../Models/auth.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[User]
})
export class ProfileComponent implements OnInit {
  auth : auth;
  constructor(
    private router:Router, 
    private userService: UserService,
    private locals: LocalStorageService,
    private user:User,
  ) { }
  ngOnInit() {
    this.auth = this.locals.retrieve('token');
    this.userService.getUserByID(this.auth.uid).subscribe(res => {
      this.user = res;
    })
  }
}
