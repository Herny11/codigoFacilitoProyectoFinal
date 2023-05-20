import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards } from 'src/app/interfaces/card.interface';
import{map}from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  API_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'

  constructor(private http: HttpClient) { }

  getCards(name: string | null, offset = 0){
    const params: any = {
      num: 50,
      offset
    };
    if(name) params.fname = name;
    return this.http.get<Cards[]>(this.API_URL, {params}).pipe(
      map((res: any)=> res.data)
    );
  }
  getCard(id: string){
    const params = {id};
    return this.http.get(this.API_URL, {params}).pipe(
      map((res: any) => res.data[0]));
  }

}
