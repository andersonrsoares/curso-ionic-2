import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConnectionService } from '../../providers/connection-service';

@Component({
  selector: 'page-generated-test',
  templateUrl: 'generated-test.html'
})
export class GeneratedTest {
  resultado: string = 'teste';

  constructor(public navCtrl: NavController, private connectionService:ConnectionService) {

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
  // ionViewDidLoad() {
  //   console.log('Hello GeneratedTest Page');
  // }

}
