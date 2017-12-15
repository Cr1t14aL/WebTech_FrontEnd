import { Component, OnInit, Input } from '@angular/core';
import { SlidebarService } from '../../services/slidebar.service';
import { User } from '../../Models/user.model';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { Session } from '../../Models/session.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
  user: User;
  session: Session;
  err: string[];
  constructor(private slidebarService: SlidebarService,
    private authService: AuthService,
    private localSt: LocalStorageService,
    private router: Router
  ) { }


  ngOnInit() {
    this.session = this.localSt.retrieve('token');
    this.localSt.observe('token').subscribe(res => {
      this.session = res;
    })
    this.user = new User();
    this.err = [];
  }

  signIn() {
    if(!this.user.email){
      this.err.push("Email Address can not be empty")
      return;
    }
    if(!this.user.password){
      this.err.push("Password can not be empty")
      return;
    }
    this.authService.signIn(this.user.email, this.user.password).subscribe(res => {
        this.localSt.store('token', res);
        if(this.session.types != 3){
          document.getElementById("closeModal").click();
          this.session = this.localSt.retrieve('token')
          console.log(this.session)
          this.router.navigate(['/home']);
        } else {
          this.session = this.localSt.retrieve('')
          console.log(this.session)
          this.localSt.clear()
          document.getElementById("closeModal").click();
          this.router.navigate(['/homepage'])
        }
    })
  }

  _toggleSidebar() {
    this.slidebarService.onClick();
  }
}
