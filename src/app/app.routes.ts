import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user-profile', component: UserComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: '**', redirectTo: '/user-profile', pathMatch: 'full' },
];

export { appRoutes };
