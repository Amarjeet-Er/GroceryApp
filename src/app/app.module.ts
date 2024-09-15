import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Skip1Component } from './skipPage/skip1/skip1.component';
import { Skip2Component } from './skipPage/skip2/skip2.component';
import { Skip3Component } from './skipPage/skip3/skip3.component';
import { LoginJunctionComponent } from './login-junction/login-junction.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { AccountComponent } from './home/account/account.component';
import { CartComponent } from './home/cart/cart.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddressComponent } from './user/address/address.component';
import { CategoryProducatListComponent } from './home/category-producat-list/category-producat-list.component';
import { TearmAndConditionComponent } from './home/tearm-and-condition/tearm-and-condition.component';
import { FaqComponent } from './home/faq/faq.component';
import { LocationTrackComponent } from './home/location-track/location-track.component';
import { OrdersComponent } from './home/orders/orders.component';
import { OrderDetailsComponent } from './home/order-details/order-details.component';
import { HelpCenterComponent } from './home/help-center/help-center.component';
import { CouponsComponent } from './home/coupons/coupons.component';
import { SettingComponent } from './home/setting/setting.component';
import { GoogleMapsModule } from '@angular/google-maps'; // Import GoogleMapsModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    Skip1Component,
    Skip2Component,
    Skip3Component,
    LoginJunctionComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    CategoriesComponent,
    AccountComponent,
    CartComponent,
    ProfileComponent,
    AddressComponent,
    CategoryProducatListComponent,
    TearmAndConditionComponent,
    FaqComponent,
    LocationTrackComponent,
    OrdersComponent,
    OrderDetailsComponent,
    HelpCenterComponent,
    CouponsComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    GoogleMapsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
