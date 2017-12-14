import { Component, OnInit } from '@angular/core';
import { SlidebarService } from '../../services/slidebar.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Session } from '../../Models/session.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private slidebarService: SlidebarService, private locals: LocalStorageService, private router:Router) { }
  _opened: boolean;
  fullname: string;

  ngOnInit() {
    this._opened = this.slidebarService.isOpen;
    this.slidebarService.toggle.subscribe(isOpen => {
      const session: Session = this.locals.retrieve('token');
      if (session != null)
        this.fullname = `${session.fname} ${session.lname}`
      this._opened = isOpen;
    })
  }

  _toggleSidebar() {
    this.slidebarService.onClick();
  }

  _toggleClose() {
    this.slidebarService.onClose();
  }

  getUser(){
    this.router.navigate(['/profile']);
    return false;
  }
  changeToFood(){
    this.router.navigate(['/foodlist']);
    return false;
  }

  changeToHome(){
    this.router.navigate(['/home']);
    return false;
  }

  logout() {
    this.locals.clear();
  }

}
