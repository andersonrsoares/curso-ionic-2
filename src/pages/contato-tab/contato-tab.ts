import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ContatoTab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contato-tab',
  templateUrl: 'contato-tab.html'
})
export class ContatoTab {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ContatoTab Page');
  }

}
