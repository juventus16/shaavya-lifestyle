import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'corporate', component: CorporateComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
