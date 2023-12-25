import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MusicComponent } from './music/music.component';
import { Wishlist } from './wishlist/wishlist';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HomepageComponent } from './homepage/homepage.component';



const routes: Routes = [
  {path: 'registration', component: RegistrationComponent },

  {path:'login' ,component:  LoginComponent},
 
  {path:'music',component: MusicComponent },

  {path: 'wishlist',component: WishlistComponent},

  {path: 'home', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
