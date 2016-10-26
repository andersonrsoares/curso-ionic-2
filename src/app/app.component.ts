import { Component } from '@angular/core';//ViewChild
import { Platform,MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';


import { HomePage } from '../pages/home/home';
import { GeneratedTest } from '../pages/generated-test/generated-test';
import { Alert } from '../pages/alert/alert';
import { Button } from '../pages/button/button';
import { Cards } from '../pages/cards/cards';
import { Modal } from '../pages/modal/modal';
import { Navigation } from '../pages/navigation/navigation';
import { Tab } from '../pages/tab/tab';
import { Toast } from '../pages/toast/toast';
import { Toolbar } from '../pages/toolbar/toolbar';
import { Bancodados } from '../pages/bancodados/bancodados';
import { TakeCamera } from '../pages/camera/camera';
import { Maps } from '../pages/maps/maps';

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
      {component:GeneratedTest,title:'Generated ',icon:'home'},
      {component:Alert,title:'Alert',icon:'logo'},
      {component:Button,title:'Button',icon:'home'},
      {component:Cards,title:'Cards',icon:'home'},
      {component:Modal,title:'Modal',icon:'home'},
      {component:Navigation,title:'Navigation',icon:'home'},
      {component:Tab,title:'Tab',icon:'home'},
      {component:Toast,title:'Toast',icon:'home'},
      {component:Toolbar,title:'Toolbar',icon:'home'},
      {component:Bancodados,title:'Banco de Dados',icon:'home'},
      {component:TakeCamera,title:'Camera',icon:'home'},
      {component:Maps,title:'Maps',icon:'home'}
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
