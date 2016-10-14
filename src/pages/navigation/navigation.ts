import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { GeneratedTest } from '../../pages/generated-test/generated-test';
/*
  Generated class for the Navigation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html'
})
export class Navigation {

  constructor(public navCtrl: NavController,public parans: NavParams) {

  }

  ionViewDidLoad() {
    console.log('Hello Navigation Page');
  }

  openPage(){
       this.navCtrl.push(GeneratedTest,{ param:'teste abre uma nova pagina'},(done)=>{
              console.log('done');
      }).then((res) => {
            console.log(res);
      }).catch((err)=>{
          console.log(err);
      });;
  }

}
