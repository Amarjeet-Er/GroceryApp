import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent  implements OnInit {
  categorys = [
    { path: '../../../assets/image/Spice-img.jpeg', name: 'Onion' },
    { path: '../../../assets/image/fruit-img.jpeg', name: 'Tomato' },
    { path: '../../../assets/image/fruit-img.jpeg', name: 'Lettuce' },
    { path: 'https://blog.sholok.com/wp-content/uploads/2024/03/grocery-store-near-me-grocery-shopping-online-grocery-shop-bd-scaled.jpg', name: 'Pumpkin' },
    { path: '../../../assets/image/fruit-img.jpeg', name: 'Carrot' },
    { path: '../../../assets/image/Spice-img.jpeg', name: 'Potato' },
    { path: 'https://blog.sholok.com/wp-content/uploads/2024/03/grocery-store-near-me-grocery-shopping-online-grocery-shop-bd-scaled.jpg', name: 'Pumpkin' },
    { path: '../../../assets/image/Spice-img.jpeg', name: 'Onion' },
    { path: '../../../assets/image/fruit-img.jpeg', name: 'Carrot' },
  ];
  constructor() { }

  ngOnInit() {}

}
