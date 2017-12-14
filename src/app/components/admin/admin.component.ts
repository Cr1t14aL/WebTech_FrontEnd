import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../../Models/user.model';
import { UserService } from '../../services/user.service';
import { DetailsService } from '../../services/foodlist.service';
import { AuthGuard } from '../../auth-guard.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private userList: User[];

  constructor(
    private router:Router, 
    private userService: UserService,
    private auth: AuthGuard
  ) { }

  ngOnInit() {

    if(this.auth.canActivate){
      this.userService.getUsers().subscribe((response) => {
        this.userList = response;
      })
    }
   

  }

}
