import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
//I rooted the pages to correct positions and roots in my tab bar
export class TabsPage {
  tab1Root='HomePage';
  tab2Root='TargetedcvPage';
  tab3Root='AboutPage';
  tab4Root='ExtraPage';
  tab5Root='ContactPage';
  tab6Root='ProjectworkPage';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

} 
