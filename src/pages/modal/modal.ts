import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { ModalLogin } from '../../pages/modal-login/modal-login';
/*
  Generated class for the Modal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class Modal {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello Modal Page');
  }

  showModal(){
        console.log('Modal');
    let profileModal = this.modalCtrl.create(ModalLogin,{ param:'teste abre uma modal'});
    profileModal.onDidDismiss((param)=>{
       console.log(param);
    });

    profileModal.present();
  }
}
