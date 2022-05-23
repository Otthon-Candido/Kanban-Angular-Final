import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class CardTestService {


  cardtestafazer(cardsafazer, botafazer){


    if(cardsafazer.length == 1){
      return botafazer = false;
      }

    else{
      return botafazer = true;
    }


   }

   cardtestandamento(cardsandamento, botandamento){


    if(cardsandamento.length == 1){
      return botandamento = false;
      }

    else{
      return botandamento = true;
    }


   }

   cardtestfinalizado(cardsfinalizado, botfinalizado){


    if(cardsfinalizado.length == 1){
      return botfinalizado = false;
      }

    else{
      return botfinalizado = true;
    }


   }

}
