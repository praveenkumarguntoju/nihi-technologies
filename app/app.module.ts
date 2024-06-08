import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
const config = {
  apiKey: 'AIzaSyAwMeMLc_xWJiSy7erN5At47qUX_pQK59U',
  authDomain: 'nihi-technologies-ltd.firebaseapp.com',
  projectId: 'nihi-technologies-ltd',
  storageBucket: 'nihi-technologies-ltd.appspot.com',
  messagingSenderId: '897879292682',
  appId: '1:897879292682:web:ff2782af4705326bb498f3',
  measurementId: 'G-RF902LN46N',
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
