import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  cart_length: number = 2;

  constructor(
    private _router: Router,
  ) {
  }

  async ngOnInit() {
  }

  // app action area to router according to function 
  search() {
    this._router.navigate(['/store/search'])
  }

  cart() {
    this._router.navigate(['/home/cart'])
  }

  orderdetails() {
    this._router.navigate(['/home/orderdetails'])
  }

  backButton() {
    this._router.navigate(['/home/account'])
  }
}