import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Models/user.model';
import { UserService } from '../../services/user.service';
import { DetailsService } from '../../services/foodlist.service';
import { AuthGuard } from '../../auth-guard.service'
import { Details } from '../../Models/detail.model';
import { Session } from '../../Models/session.model'
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  foodlist: Details;
  err: string[] = [];
  userList: User[];
  userSearch: User[];
  editUser: User;
  session : Session;
  loading : boolean;

  private detailList : Details[];  


  constructor(
    private router: Router,
    private userService: UserService,
    private auth: AuthGuard,
    private detailsService:DetailsService,
    private locals: LocalStorageService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.editUser = new User();
    this.userList = [];
    this.userSearch = [];
    this.userService.getUsers().subscribe(res => {
      this.userList = res;
      this.userSearch = res;
      this.loading = false;
    })
    this.session = this.locals.retrieve('token');

    this.userService.getUsers().subscribe((response) => {
      this.userList = response;
    })

    this.detailsService.getDetail().subscribe((response) => { 
      this.detailList = response;
    })

    // this.foodlist = new Details();
  }

  loadUser4Edit(user: User) {
    this.editUser = user;
  }

  updateUser() {
    this.loading = true;
    this.userService.update(this.editUser).subscribe(res => {
      this.loading = false;
    })
  }


  // About FoodList
  addFoodList(){    

  }
}
