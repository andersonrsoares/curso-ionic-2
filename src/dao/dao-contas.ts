import { NativeStorage,SQLite } from 'ionic-native';


export  class DAOContas {

  private db:SQLite;
  private menssage:string="";
  constructor() {
      this.db = new SQLite();
      this.db.openDatabase({
        name: 'data.db',
        location: 'default' // the location field is required
      }).then(() => {
        this.db.executeSql('CREATE TABLE IF NOT EXISTS contas(descricao VARCHAR(32))', {}).then(() => {
        }, (err) => {
          this.menssage = 'Unable to execute sql: ' + JSON.stringify(err);
          console.error('Unable to execute sql: ', err);
        });
      }, (err) => {
          this.menssage = 'Unable to open database: '+ JSON.stringify(err);
      });

  }

  getMessage() :string{
      return   this.menssage;
  }

  getList() :Promise<any>{
      return this.db.executeSql("select * from  contas",[]);

  }

  insert(conta:any){
      return this.db.executeSql("insert into contas(descricao) values(?)",["teste"]);
  }

  edit(conta:any){

  }

  delete(conta:any){

  }

  getNative() : Promise<any> {
      return NativeStorage.getItem('myitem');
  }

  setNative() : Promise<any> {
    return NativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'});
  }
/*
  NativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

NativeStorage.getItem('myitem')
  .then(
    data => console.log(data),
    error => console.error(error)
  );*/

}
