import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms"
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from '../app/auth-guard.service'

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    RouterModule.forRoot([
    { path: "register", component: RegisterComponent},
    { path: "login", component: LoginComponent},
    { path: "", component: HomeComponent, canActivate: [AuthGuardService]},

    ]),
  ],
  declarations: [ AppComponent, LoginComponent, RegisterComponent, HomeComponent ],
  providers: [AuthGuardService],
  bootstrap: [ AppComponent ],
})
export class AppModule {}