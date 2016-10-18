import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DAOContas } from '../../dao/dao-contas';
/*
  Generated class for the Bancodados page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bancodados',
  templateUrl: 'bancodados.html'
})
export class Bancodados {
  resultado: string="teste";
  dao:DAOContas;
  constructor(public navCtrl: NavController) {
    this.dao = new DAOContas();

  }

  ionViewDidLoad() {
    console.log('Hello Bancodados Page');
  }

  selectDB(){
      this.dao.getList()
      .then((res) => {
              console.log("select * from  contas ok ");
              console.log(res);
              this.resultado = res.toString();
      }).catch((err)=>{
          console.log("select * from  contas erro ");
          console.log(err);
          this.resultado =err.toString();;
      });;
  }

  insertBB(){

  }

}
