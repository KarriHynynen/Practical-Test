import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  nav: any;
//this part checks your login information to let you in the application or forwards you to make an account on register page
	@ViewChild('username') user;
	@ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value + '@domian.xta', this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('Success! You\'re logged in');
      this.navCtrl.setRoot( 'MenuPage' );
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
      //if user could not login, an error message is shown
    })
  	console.log('Would sign in with ', this.user.value, this.password.value);
  }
  //Create account moves user to registerpage
  public createAccount() {
    this.navCtrl.setRoot('RegisterPage');
  }

}