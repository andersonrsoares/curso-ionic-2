import { Component } from '@angular/core';
import { NavController,ViewController,NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController,public view: ViewController,public parans: NavParams) {
       console.log(parans.get("paramm"));
  }

  ionViewDidLoad() {
    console.log('Hello ModalLogin Page');
  }

  close(){
    console.log('close()');
      var parametro:string;
      parametro = "teste"
      this.view.dismiss(parametro);
  }
}
