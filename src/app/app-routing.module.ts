import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';

import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth-guard.service';
import { AdminGuard } from './admin-guard.service';
import { RegisterComponent } from './components/register/register.component';
import { FoodlistComponent } from './components/foodlist/foodlist.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate:[AuthGuard], data: { title: 'Home' } },
    { path: 'homepage', component: HomepageComponent, data: { title: 'Homepage' } },
    { path: 'register', component: RegisterComponent, data: { title: 'Register' }},
    { path: 'foodlist', component: FoodlistComponent, canActivate:[AuthGuard], data: { title: 'Foodlist'}},
    { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard], data: { title: 'Profile'}},
    { path: 'admin', component: AdminComponent, canActivate:[AdminGuard], data: { title: 'admin'}}

    // { path: '**', component: PageNotFoundComponent, data: { title: 'Page not found' } },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
