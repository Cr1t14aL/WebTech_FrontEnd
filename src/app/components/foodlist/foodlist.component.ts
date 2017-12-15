import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from '../../Models/detail.model';
import { DetailsService } from '../../services/foodlist.service';
import { UserService } from '../../services/user.service';
import { LocalStorageService } from 'ngx-webstorage';
import { User} from '../../Models/user.model';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css'],
  providers:[User]
})
export class FoodlistComponent implements OnInit {
  private detailList : Details[];
  addMenuList : Details[];
  total : number;
  constructor(private router:Router, 
    private detailsService:DetailsService,  
    private locals: LocalStorageService,
    private user:User) { }
  
  ngOnInit() {

    this.detailsService.getDetail().subscribe((response) => { this.detailList = response;
    }) 
    this.addMenuList = [];
  }

  addToArray(detail: Details){
    this.total = 0;
    this.addMenuList.push(detail);
    this.addMenuList.forEach(res => {
      this.total += res.foodCalories;
      console.log(res);
    });
    console.log(this.total);
    console.log(this.addMenuList);
  }
  deletArray(i: number)
  {
    this.total -= this.addMenuList[i].foodCalories;
    this.addMenuList.splice(i,1);
  }

  save()
  {
    this.user=this.locals.retrieve('token')
    this.user.todayCal=this.total

    //bug
    console.log(`${this.user.lname}`)
    console.log(`${this.user.todayCal}`)
    
  }

}
