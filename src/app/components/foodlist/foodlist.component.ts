import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from '../../Models/detail.model';
import { DetailsService } from '../../services/foodlist.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {
  private detailList : Details[];
  constructor(private router:Router, private detailsService:DetailsService) { }

  ngOnInit() {

    this.detailsService.getDetail().subscribe((response) => { this.detailList = response;
    }) 
  }

  changeToListMenu(){
    this.router.navigate(['/listmenu']);
    return false;
  }

}
