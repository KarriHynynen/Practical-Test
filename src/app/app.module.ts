//adding imports for modules to my app
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';
 //added my app to firebase auth
const firebaseAuth = {
  apiKey: "AIzaSyAVMkfQuqBPgH6MZR6QCipsazjTDmeK0yU",
  authDomain: "test-1-5ccb7.firebaseapp.com",
  databaseURL: "https://test-1-5ccb7.firebaseio.com",
  projectId: "test-1-5ccb7",
  storageBucket: "",
  messagingSenderId: "515313198179"
  };
 
@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseAuth),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}