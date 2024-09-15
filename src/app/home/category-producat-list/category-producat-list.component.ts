import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-category-producat-list',
  templateUrl: './category-producat-list.component.html',
  styleUrls: ['./category-producat-list.component.scss'],
})
export class CategoryProducatListComponent  implements OnInit {
  slider_data = [
    { path: 'https://blog.sholok.com/wp-content/uploads/2024/03/grocery-store-near-me-grocery-shopping-online-grocery-shop-bd-scaled.jpg' },
    { path: 'https://www.shopurgrocery.com/wordpress/wp-content/uploads/2019/11/Launch-your-Online-Grocery-Store-Special-Script-Features-and-Upgrades.png' },
    { path: 'https://blog.sholok.com/wp-content/uploads/2024/03/grocery-store-near-me-grocery-shopping-online-grocery-shop-bd-scaled.jpg' },
    { path: 'https://www.shopurgrocery.com/wordpress/wp-content/uploads/2019/11/Launch-your-Online-Grocery-Store-Special-Script-Features-and-Upgrades.png' },
  ];

  categorys = [
    { path: '../../../assets/image/fruit-img.jpeg', name: 'Tomato' },
    { path: '../../../assets/image/Spice-img.jpeg', name: 'Onion' },
    { path: '../../../assets/image/fruit-img.jpeg', name: 'Lettuce' },
    { path: 'https://blog.sholok.com/wp-content/uploads/2024/03/grocery-store-near-me-grocery-shopping-online-grocery-shop-bd-scaled.jpg', name: 'Pumpkin' },
    { path: '../../../assets/image/fruit-img.jpeg', name: 'Carrot' },
    { path: '../../../assets/image/Spice-img.jpeg', name: 'Potato' },
  ];

  
  constructor() { }

  ngOnInit() {}

}
