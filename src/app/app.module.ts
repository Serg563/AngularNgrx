import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './Services/Auth/auth.service';
import { userReducer } from './ngrx/userStore/user.reducer';
import { AuthEffects } from './ngrx/userStore/user.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([AuthEffects]),
    FormsModule,

    StoreModule.forRoot({ user: userReducer }),
    StoreDevtoolsModule.instrument({}),
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
