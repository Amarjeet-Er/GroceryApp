import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { CategoryProducatListComponent } from './category-producat-list/category-producat-list.component';
import { TearmAndConditionComponent } from './tearm-and-condition/tearm-and-condition.component';
import { FaqComponent } from './faq/faq.component';
import { LocationTrackComponent } from './location-track/location-track.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'account', component: AccountComponent },
      { path: 'cart', component: CartComponent },
    ],
  },
  { path: 'categoryproductlist', component: CategoryProducatListComponent },
  { path: 'tearmandcondition', component: TearmAndConditionComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'locationtrack', component: LocationTrackComponent },
  { path: 'setting', component: SettingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
