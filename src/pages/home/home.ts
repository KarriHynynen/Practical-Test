import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}