import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from '../../Models/detail.model';
import { DetailsService } from '../../services/foodlist.service';
import { UserService } from '../../services/user.service';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from '../../Models/user.model';
import { totalCal } from '../../Models/user.model';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css'],
  providers: [User]
})
export class FoodlistComponent implements OnInit {
  private detailList: Details[];
  addMenuList: Details[];
  total: number;
  totalCal: totalCal;
  constructor(private router: Router,
    private detailsService: DetailsService,
    private locals: LocalStorageService,
    private user: User,
    private userService: UserService) { }

  ngOnInit() {

    this.detailsService.getDetail().subscribe((response) => {
    this.detailList = response;
    })
    this.addMenuList = [];
  }

  addToArray(detail: Details) {
    this.total = 0;
    this.addMenuList.push(detail);
    this.addMenuList.forEach(res => {
      this.total += res.foodCalories;
      console.log(res);
    });
    console.log(this.total);
    console.log(this.addMenuList);
  }
  deletArray(i: number) {
    this.total -= this.addMenuList[i].foodCalories;
    this.addMenuList.splice(i, 1);
  }

  save() {
    this.totalCal = new totalCal();
    this.totalCal.todayCal = this.total;
    this.totalCal.date = new Date().getTime();
    this.user = this.locals.retrieve('token');
    if(typeof this.user.usertotalCal === 'undefined')
      this.user.usertotalCal = [];

    this.user.usertotalCal.push(this.totalCal);
    console.log(this.user);
    this.userService.putUser(this.user).subscribe((response) => {
          alert('success');
    })
  }

}
