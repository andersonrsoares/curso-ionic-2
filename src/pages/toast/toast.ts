import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';

/*
  Generated class for the Toast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html'
})
export class Toast {

  constructor(public navCtrl: NavController,private toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('Hello Toast Page');
  }

  showToast(){
    let toast = this.toastCtrl.create({
        message: 'Ola mundo',
        duration: 3000
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
  }
}
