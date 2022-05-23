import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class RemoveCardService {


  remove(indice, cards){
   return cards.splice(indice,1);
  }
}
