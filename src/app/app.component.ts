import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/whishitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = [
    new WishItem('To Learn Angular'),
    new WishItem('To Get Coffee', true),
    new WishItem('Find grass that cuts itself '),
  ];
  title = 'wishlist'; 
}
