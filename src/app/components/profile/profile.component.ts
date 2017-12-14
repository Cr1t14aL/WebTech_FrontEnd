import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from "../../Models/user.model";
import { UserService } from '../../services/user.service';
import { AuthGuard } from '../../auth-guard.service'
import { LocalStorageService } from 'ngx-webstorage';
import { Session } from '../../Models/session.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor(
    private router:Router, 
    private userService: UserService,
    private auth: AuthGuard,
    private user:User
  ) { }
  ngOnInit() {
  const user=localStorage.retrive('token')
  }
}
