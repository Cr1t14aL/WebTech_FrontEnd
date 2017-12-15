import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { TabModule } from 'angular-tabs-component';

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
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminGuard } from './admin-guard.service';
import { DetailsService } from './services/foodlist.service';
import { LoadingModule } from 'ngx-loading';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    FoodlistComponent,
    HomepageComponent,
    AdminComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    NgxBarcodeModule,
    FormsModule,
    HttpClientModule,
    Ng2Webstorage,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlashMessagesModule,
    TabModule,
    LoadingModule,
    SidebarModule.forRoot(),
  ],
  providers: [SlidebarService, AuthGuard, AdminGuard,AuthService,UserService,AuthService,DetailsService,ProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
