import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';


@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class Alert {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello Alert Page');
  }


  alert(){
    let alert = this.alertCtrl.create({
      title: 'Alet teste',
      subTitle: 'teste de alert no ionic 2',
      buttons: [
        {
          text: 'OK',
          handler: data => {
            console.log('ok clicked');
          }
        }
      ]
    });
    alert.present();
  }
}
