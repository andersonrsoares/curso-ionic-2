import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the HomeTab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home-tab',
  templateUrl: 'home-tab.html'
})
export class HomeTab {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HomeTab Page');
  }

}
