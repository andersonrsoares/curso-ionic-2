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
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
}
