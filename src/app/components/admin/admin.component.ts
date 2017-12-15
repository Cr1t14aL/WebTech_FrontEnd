import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Models/user.model';
import { UserService } from '../../services/user.service';
import { DetailsService } from '../../services/foodlist.service';
import { AuthGuard } from '../../auth-guard.service'
import { Details } from '../../Models/detail.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  foodlist: Details;
  err: string[] = [];

  private userList: User[];
  private detailList : Details[];  


  constructor(
    private router: Router,
    private userService: UserService,
    private auth: AuthGuard,
    private detailsService:DetailsService,
  ) { }

  ngOnInit() {

    this.userService.getUsers().subscribe((response) => {
      this.userList = response;
    })

    this.detailsService.getDetail().subscribe((response) => { 
      this.detailList = response;
    })

    // this.foodlist = new Details();
  }
  // Anout User
  deleteUser(){
    
  }

  // About FoodList
  addFoodList(){    

  }
}
