import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  @ViewChild('modal') modal!: IonModal;

 

  constructor(  ) {

  }

  async ngOnInit() {
  
  }



  // function for add or update address for user
  async saveAddress(modal: any) {
    modal.dismiss();
  }

  // Open the modal for adding new address
  openAddModal() {
    this.modal.present();
  }

}
