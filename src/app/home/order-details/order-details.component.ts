import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {

  order: any;

  constructor() { }

  ngOnInit() {
    // Dummy order data - Replace this with API call or dynamic data
    this.order = {
      id: '123456',
      date: new Date(),
      status: 'outForDelivery',
      deliveryAddress: '123 Main Street, Springfield, USA',
      items: [
        {
          name: 'Apples',
          quantity: 3,
          price: 2.50,
          totalPrice: 7.50,
          image: '../../../assets/image/Coupons.jpg'
        },
        {
          name: 'Bananas',
          quantity: 5,
          price: 1.00,
          totalPrice: 5.00,
          image: '../../../assets/image/Coupons.jpg'
        }
      ],
      subTotal: 12.50,
      tax: 1.25,
      deliveryFee: 3.00,
      totalAmount: 16.75
    };
  }

  contactSupport() {
    window.open('tel:+1234567890');
  }
}