import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ModalLogin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-login',
  templateUrl: 'modal-login.html'
})
export class ModalLogin {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ModalLogin Page');
  }

}
