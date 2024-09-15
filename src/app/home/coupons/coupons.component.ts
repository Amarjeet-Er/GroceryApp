import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent implements OnInit {

  // Sample coupons data
  coupons = [
    {
      title: '10% off on Groceries',
      code: 'GROC10',
      discount: '10% off',
      expiryDate: 'Sep 30, 2024',
    },
    {
      title: 'Free Delivery on Orders Above ₹50',
      code: 'FREESHIP',
      discount: 'Free Delivery',
      expiryDate: 'Oct 15, 2024',
    },
    {
      title: '₹5 off on Your First Order',
      code: 'WELCOME5',
      discount: '₹5 off',
      expiryDate: 'Dec 31, 2024',
    }
  ];

  constructor(
    private toastController: ToastController
  ) { }
  ngOnInit(): void {
  }

  // Handle applying the coupon
  async applyCoupon(code: string) {
    const toast = await this.toastController.create({
      message: `Coupon "${code}" applied successfully!`,
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    await toast.present();
  }
}