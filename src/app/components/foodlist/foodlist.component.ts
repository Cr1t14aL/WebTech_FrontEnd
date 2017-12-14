import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  changeToListMenu(){
    this.router.navigate(['/listmenu']);
    return false;
  }

}
