import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
    heightValue :Number = 0 ;
    weightValue :Number = 0;
  ngOnInit() {
  }

  changeToFood(){
    this.router.navigate(['/foodlist']);
    return false;
  }

  clearInput(){
    this.heightValue = 0;
    this.weightValue = 0;
  }

}
