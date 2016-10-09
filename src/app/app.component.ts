import { Component,ViewChild } from '@angular/core';
import { Platform,MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';


import { HomePage } from '../pages/home/home';
import { GeneratedTest } from '../pages/generated-test/generated-test';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  rootPage: any = HomePage;
  menuCtrl:MenuController;

  pages: Array<{component:any,title:string ,icon:string}>;
  constructor(platform: Platform, menuCtrl:MenuController) {
    this.menuCtrl = menuCtrl;
    this.pages = [
      {component:HomePage,title:'Home',icon:'home'},
      {component:GeneratedTest,title:'Generated ',icon:'home'}
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page: any) {
    console.log('openPage');
    console.log(page);
    this.rootPage = page.component;
    //  this.nav.setRoot(page.component);
    this.menuCtrl.close();

  }

}
