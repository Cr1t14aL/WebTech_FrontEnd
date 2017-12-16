import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from '../../Models/detail.model';
import { DetailsService } from '../../services/foodlist.service';
import { UserService } from '../../services/user.service';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from '../../Models/user.model';
import { totalCal } from '../../Models/user.model';
import { auth } from '../../Models/auth.model';

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
  auth: auth;
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

    });

  }
  deletArray(i: number) {
    this.total -= this.addMenuList[i].foodCalories;
    this.addMenuList.splice(i, 1);
  }

  save() {
    let today: Date = new Date();
    this.totalCal = new totalCal();
    this.totalCal.todayCal = this.total;
    this.totalCal.date = new Date().getTime();
    let todayString: string = `${today.getDay()}-${today.getMonth()}-${today.getFullYear()}`
    let todaySever: Date;
    this.auth = this.locals.retrieve('token');
    this.userService.getUserByID(this.auth.uid).subscribe(res => {
      this.user = res;
      if (typeof this.user.usertotalCal === null) {
        this.user.usertotalCal = [];
      }
      if (this.user.usertotalCal.length == 0) {
        this.user.usertotalCal.push(this.totalCal);
        this.userService.putUser(this.user).subscribe((response) => {
          alert('success')
        })
      } else {
        this.user.usertotalCal.forEach(res => {
          todaySever = new Date(res.date);
          if (todayString == `${todaySever.getDay()}-${todaySever.getMonth()}-${todaySever.getFullYear()}`) {

            res.todayCal += this.total;

          } else {
            this.user.usertotalCal.push(this.totalCal);
          }
        })

        this.userService.putUser(this.user).subscribe((response) => {
          alert('success')
        })
      }

    })
    console.log(auth);
  }

}
