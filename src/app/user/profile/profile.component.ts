import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  selectedProfileImage: any;
  profileInfo: any;

  constructor() {
    // Initializing profileInfo with sample data
    this.profileInfo = {
      Name: 'Abhishek Patel',
      Email: 'abhishekpatel@gmail.com',
      Password: 'password123',
      Phone_number: '1234567890',
      Profile_image: '../../../assets/image/profile.jpeg',
      address: 'Ashok Nagar, New Delhi, Block-A',
    };
  }

  ngOnInit() {}

  openFile() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.selectedProfileImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
    fileInput.click();
  }

 
}
