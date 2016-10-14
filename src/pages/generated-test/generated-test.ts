import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ConnectionService } from '../../providers/connection-service';

@Component({
  selector: 'page-generated-test',
  templateUrl: 'generated-test.html'
})
export class GeneratedTest {
  resultado: string = 'teste';

  constructor(public navCtrl: NavController, private connectionService:ConnectionService,public parans: NavParams) {
      console.log(parans.get("param"));
      console.log(parans.data.param);
  }

  buscaCep(){
    this.connectionService.getCep()
      .then((res) => {
        let json = res.json();
            console.log(res);
            console.log(json);
            this.resultado =  JSON.stringify(json);
      }).catch((err)=>{
          console.log(err);
      });
  }

  voltar(){
    this.navCtrl.pop();
  }
  // ionViewDidLoad() {
  //   console.log('Hello GeneratedTest Page');
  // }

}
