import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavHeaderComponent } from './layouts/nav-header/nav-header';
import { OrdersComponent } from './orders-page/orders/orders.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AuthenticationService } from './authentication.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CrudService } from './services/crud-service.service';
import { SignUpComponent } from './sign-Up/sign-Up/sign-Up.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NavHeaderComponent,
    OrdersComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthenticationService, CrudService],
  bootstrap: [AppComponent],
})
export class AppModule {}
