import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Cards page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class Cards {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Cards Page');
  }

}
