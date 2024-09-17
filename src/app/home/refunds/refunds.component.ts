import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss'],
})
export class RefundsComponent implements OnInit {

  orders: any[] = [];

  constructor(
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.orders = [
      {
        itemName: 'Milk',
        price: 3.50,
        orderDate: '2024-09-01',
        image: '../../../assets/image/snacks-bg-img.jpeg.png',
        refundRequested: false
      },
      {
        itemName: 'Apples',
        price: 2.99,
        orderDate: '2024-08-30',
        image: '../../../assets/image/snacks-bg-img.jpeg.png',
        refundRequested: false
      }
    ];
  }

  // Handle refund request

  async requestRefund(code: any) {
    const toast = await this.toastController.create({
      message: `Refund already requested for this order`,
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    await toast.present();
  }
}