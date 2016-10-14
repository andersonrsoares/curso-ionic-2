import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeTab } from '../../pages/home-tab/home-tab';
import { ContatoTab } from '../../pages/contato-tab/contato-tab';
/*
  Generated class for the Tab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class Tab {

  home:any = HomeTab;
  contato:any=ContatoTab;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Tab Page');
  }

}
