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
  itens:Array<any>;
  constructor(public navCtrl: NavController) {
    this.dao = new DAOContas();
    this.resultado = this.dao.getMessage();

  }

  ionViewDidLoad() {
    console.log('Hello Bancodados Page');
    this.selectDB();
  }

  selectDB(){
      this.dao.getList()
      .then((res) => {
              console.log("select contas ok ");
              this.resultado = JSON.stringify(res);
              this.itens = [];
              for (var _i = 0; _i < res.rows.length; _i++) {
                  var item = res.rows.item(_i);
                  console.log(item.descricao);
                  this.itens.push(item);
              }
              console.log("rowsAffected " +res.rowsAffected)
              console.log("insertId "  + res.insertId)
              this.resultado = JSON.stringify(res);
      }).catch((err)=>{
          console.log("select contas erro ");
          console.log(err);
          this.resultado = JSON.stringify(err);
      });;
  }

  insertDB(){
    this.dao.insert("")
    .then((res) => {
            console.log("inset ok ");
            console.log(res);
            for (var _i = 0; _i < res.rows.length; _i++) {
                var item = res.rows.item(_i);
                console.log(item);
            }

            console.log("rowsAffected " +res.rowsAffected)
            console.log("insertId "  + res.insertId)
    }).catch((err)=>{
        console.log("inset into contas erro ");
        console.log(err);
        this.resultado =err.toString();;
    });;
  }

}
