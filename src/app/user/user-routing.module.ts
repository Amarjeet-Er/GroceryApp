import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  {path:'profile', component: ProfileComponent},
  {path:'address', component: AddressComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
