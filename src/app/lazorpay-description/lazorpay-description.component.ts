import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Checkout } from 'capacitor-razorpay';


@Component({
  selector: 'app-lazorpay-description',
  templateUrl: './lazorpay-description.component.html',
  styleUrls: ['./lazorpay-description.component.scss'],
})
export class LazorpayDescriptionComponent implements OnInit {
  isChecked: boolean = false;
  deliveryOption: string = '';
  constructor(
    private _formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {

  }


  payNow() {
    this.payWithrezorpay()
  }

  async payWithrezorpay() {
    const options = {
      key: 'rzp_test_YGORtbwcCRzFxD', //test
      // key: 'rzp_live_nrumEje16i8mje', //live
      amount: '1',
      description: 'vakil uncle',
      image: '',
      // order_id: 'order_Cp10EhSaf7wLbS',
      currency: 'INR',
      name: 'Amar',
      prefill: {
        email: 'amar@gmail.com',
        contact: '854458'
      },
      theme: {
        color: '#3c595d'
      }
    }

    try {
      let data = (await Checkout.open(options));
      console.log(data.response + "AcmeCorp");
      console.log(JSON.stringify(data))
    } catch (error) {
    }
  }
}