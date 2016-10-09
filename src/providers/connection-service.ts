import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConnectionService {

  constructor(public http: Http) {
    console.log('Hello ConnectionService Provider');
  }

  getCep() : Promise<Response>{
    return  this.http.get('https://viacep.com.br/ws/81900350/json/').toPromise();

  }
  getCep2() : Promise<Response>{
    return new Promise(resolve => {

      this.http.get('https://viacep.com.br/ws/81900350/json/')
        .map(res => res.json())
        .subscribe(data => {
            resolve(data);
        });
    });

  }

}
