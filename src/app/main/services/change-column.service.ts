import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class ChangeColumnService {


changetoafazer(cards, indice, cardsAfazer){

  if(cardsAfazer.length>0){
    var cardfocus:string[] = cards[indice]
    var position:number = cardsAfazer[cardsAfazer.length-1].indice
    cards.splice(indice,1);
   return cards.splice(position + 1,0,cardfocus);
    }

    else{
      if(cards[indice].indice!=0){
      var cardfocus:string[] = cards[indice]
      cards.splice(indice,1);
     return cards.splice(0,0,cardfocus);
      }
    }
  }


changetoandamento(cards, indice, cardsAndamento){

  if(cardsAndamento.length>0){
    var cardfocus:string[] = cards[indice]
    var position:number = cardsAndamento[cardsAndamento.length-1].indice
    cards.splice(indice,1);
   return cards.splice(position + 1,0,cardfocus);
    }

    else{
      if(cards[indice].indice!=0){
      var cardfocus:string[] = cards[indice]
      cards.splice(indice,1);
     return cards.splice(0,0,cardfocus);
      }
    }
  }



changetofinalizado(cards, indice, cardsFinalizado){

  if(cardsFinalizado.length>0){
    var cardfocus:string[] = cards[indice];
    var position:number = cardsFinalizado[cardsFinalizado.length-1].indice;
    cards.splice(indice,1);
   return cards.splice(position + 1,0,cardfocus);
    }

    else{
      if(cards[indice].indice!=0){
      var cardFocus:string[] = cards[indice];
      cards.splice(indice,1);
     return cards.splice(0,0,cardFocus);
      }
    }
  }



}
