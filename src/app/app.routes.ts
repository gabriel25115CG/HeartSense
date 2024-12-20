import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component'; 
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';
import { TermsComponent } from './terms/terms.component';

export const routes: Routes = [

    { path: 'home', component: HomeComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'faq', component: FaqComponent},
    { path: 'terms', component: TermsComponent}

];
