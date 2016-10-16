import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Toolbar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-toolbar',
  templateUrl: 'toolbar.html'
})
export class Toolbar {

  search:string="";
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Toolbar Page');
  }

}
