import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent  implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit() {}

  logout(){
    this._router.navigate(["/login"])
  }
}
