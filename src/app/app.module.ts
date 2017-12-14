import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NgxBarcodeModule } from 'ngx-barcode';
import { Ng2Webstorage } from 'ngx-webstorage';

import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarModule } from 'ng-sidebar';
import { SlidebarService } from './services/slidebar.service';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './services/user.service';
import { AuthGuard } from './auth-guard.service';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { FoodlistComponent } from './components/foodlist/foodlist.component';
import { ListmenuComponent } from './components/listmenu/listmenu.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './admin-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    FoodlistComponent,
    ListmenuComponent,
    HomepageComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    NgxBarcodeModule,
    FormsModule,
    HttpClientModule,
    Ng2Webstorage,
    AppRoutingModule,
    SidebarModule.forRoot(),
  ],
  providers: [SlidebarService, AuthGuard, AdminGuard,AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
