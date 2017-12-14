import { Component } from '@angular/core';
import { DetailsService } from './services/foodlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DetailsService]
})
export class AppComponent {
  title = 'app';
}
