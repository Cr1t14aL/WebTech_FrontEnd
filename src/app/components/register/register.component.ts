import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User, TYPES, STATUS } from '../../Models/user.model';
import { AuthGuard } from '../../auth-guard.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-home-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  user: User;
  err: string[] = [];
  constructor(
    private userService: UserService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }


  ngOnInit() {
    this.user = new User();
  }

  registed() {
    this.err = [];
    if (!this.user.email) {
      this.err.push("Email")
      return;
    }
    if (!this.user.password) {
      this.err.push("password")
      return;
    }

    this.user.status = STATUS.normal;
    this.user.types = TYPES.member;

    this.user.usertotalCal = [];
   
    this.userService.create(this.user).subscribe(user => {  

      // this.flashMessagesService.show('Register is Success!', {classes: ['alert', 'alert-success'], timeout: 3000}); 

      this.router.navigate(['/homepage'])
      
    }, err => {
      this.err.push(`This email already exists`);
    })

    var login = document.getElementById("Login");
    login.onclick;
  }
  
}
