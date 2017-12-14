import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from "../../Models/user.model";
import { UserService } from '../../services/user.service';
import { AuthGuard } from '../../auth-guard.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private userList: User[];

  constructor(
    private router:Router, 
    private userService: UserService,
    private auth: AuthGuard
  ) { }

  ngOnInit() {
 
    this.userService.getUsers().subscribe((response) => {
      this.userList = response;
      })
    
  
  }
  getUser() {
    this.router.navigate(['/profile']);
    return false;
  }
  

}
