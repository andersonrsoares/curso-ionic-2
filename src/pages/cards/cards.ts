import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { ConnectionService } from '../../providers/connection-service';
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

//  planetas: Array<{nome:string,imagem:string}>;
  planetas: any;
  constructor(public navCtrl: NavController,private connectionService:ConnectionService,public loadingCtrl: LoadingController) {
    this.buscaPlanetas();
  }

  ionViewDidLoad() {
    console.log('Hello Cards Page');
  }

  buscaPlanetas(){
    let loading = this.loadingCtrl.create({
       content: 'Buscando dados...'
     });
     loading.present();
    this.connectionService.getPlanetas()
      .then((res) => {
           let json = res.json();
            console.log(res);
            console.log(json);
            this.planetas = json.planetas;
            loading.dismiss();
      }).catch((err)=>{
          loading.dismiss();
          console.log(err);
      });
  }
}
