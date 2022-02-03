
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostLoginComponent } from './components/post-login/post-login.component';

const APP_ROUTES: Routes = [
  { path: 'postLogin', component: PostLoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
export class AppRoutingModule { }
