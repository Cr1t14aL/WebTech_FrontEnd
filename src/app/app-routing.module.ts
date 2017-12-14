import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';

import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth-guard.service';
import { RegisterComponent } from './components/register/register.component';
import { FoodlistComponent } from './components/foodlist/foodlist.component';
import { ListmenuComponent } from './components/listmenu/listmenu.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: 'Home' } },
    { path: 'register', component: RegisterComponent, data: { title: 'Register' }},
    { path: 'foodlist', component: FoodlistComponent, data: { title: 'Foodlist'}},
    { path: 'listmenu', component: ListmenuComponent, data: { title: 'Listmenu'}}
    // { path: '**', component: PageNotFoundComponent, data: { title: 'Page not found' } },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
