import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;
//this is where I added all of the pages to include them in the menubar, adding them their title, their page and icon
  pages: PageInterface[] = [
    {title: 'Personal Profile', pageName: 'HomePage', tabComponent: 'HomePage', index: 0, icon: 'home'},
    {title: 'CV', pageName: 'HomePage', tabComponent: 'TargetedcvPage', index: 1, icon: 'list'},
    {title: 'Hobbies', pageName: 'HomePage', tabComponent: 'AboutPage', index: 2,  icon: 'analytics'},
    {title: 'Extra', pageName: 'HomePage', tabComponent: 'ExtraPage', index: 3,  icon: 'ribbon'},
    {title: 'Contact', pageName: 'HomePage', tabComponent: 'ContactPage', index: 4,  icon: 'contacts'},
    {title: 'Projects', pageName: 'HomePage', tabComponent: 'ProjectworkPage', index: 5,  icon: 'beer'},
    
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App) {
  }

  openPage(page: PageInterface){
let params ={};

if(page.index){
  params = {tabIndex: page.index};
}
if(this.nav.getActiveChildNav() && page.index != undefined) {
  this.nav.getActiveChildNav().select(page.index);
} else {
  this.nav.setRoot(page.pageName, params);
}
  }

    isActive(page: PageInterface){
      let childNav = this.nav.getActiveChildNav();

      if(childNav){
        if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
          return 'primary';
        }
        return;

      }
      if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
        return 'primary';
      }
  }
  logout(){
    
    this.app.getRootNav().setRoot(MyApp);
} 
}