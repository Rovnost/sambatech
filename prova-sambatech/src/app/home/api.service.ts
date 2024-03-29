import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService{

  constructor(private http: Http){}

  pegarPersonagens(valor: number): Observable<any>{
    return this.http.get(`https://www.breakingbadapi.com/api/characters?limit=10&offset=${valor}`)
    .map(dados => dados.json());
  }

  pesquisarPersonagens(query: String): Observable<any>{
    var tamanho = query.length, nome = "";
    
    for( let i = 0; i<tamanho; i++){
        if(query.charAt(i).includes(' ')){
            nome = nome + "+";
        }else{
            nome = nome + query.charAt(i);
        }
    }

    return this.http.get(`https://www.breakingbadapi.com/api/characters?name=${nome}`)
    .map(dados => dados.json());
  }

}