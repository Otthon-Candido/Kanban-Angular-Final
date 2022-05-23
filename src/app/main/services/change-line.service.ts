import { Cards } from '../build-card/card';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class ChangeLineService {


  up(id, cards, cardsafazer, cardsandamento, cardsfinalizado){

    var postionTest:boolean=true;
    var cardfocus:Cards = cards[id];
    if(cardfocus.coluna == 'A FAZER'){

      for(var loop = 0; loop < cardsafazer.length; loop++){

        if (cardsafazer[loop].indice == id && cardsafazer[0].indice !=id){


          var position:number = cardsafazer[loop-1].indice;
          cards.splice(id,1);
          postionTest=false;
          return cards.splice(position,0,cardfocus);
        }
       }

      if(postionTest){

        var position:number = cardsafazer.length;
        position = cardsafazer[position-1].indice

        cards.splice(id,1);
        console.log(cards)
        return cards.splice(position,0,cardfocus);
      }
    }


    if(cardfocus.coluna == 'EM ANDAMENTO'){

      for(var loop = 0; loop < cardsandamento.length; loop++){

        if (cardsandamento[loop].indice == id && cardsandamento[0].indice !=id){

          var position:number = cardsandamento[loop-1].indice;
          cards.splice(id,1);
          postionTest=false;
          return cards.splice(position,0,cardfocus);
        }
       }

      if(postionTest){

        var position:number = cardsandamento.length;
        position = cardsandamento[position-1].indice
        cards.splice(id,1);
        return  cards.splice(position,0,cardfocus);
      }
    }


    if(cardfocus.coluna == 'FINALIZADO'){

      for(var loop = 0; loop < cardsfinalizado.length; loop++){

        if (cardsfinalizado[loop].indice == id && cardsfinalizado[0].indice !=id){

          var position:number = cardsfinalizado[loop-1].indice;
          cards.splice(id,1);
          postionTest=false;
          return cards.splice(position,0,cardfocus);
        }
       }

       if(postionTest){

        var position:number = cardsfinalizado.length;
        position = cardsfinalizado[position-1].indice
        cards.splice(id,1);
        return cards.splice(position,0,cardfocus);
      }
    }
  }


  down(id, cards, cardsafazer, cardsandamento, cardsfinalizado){

    var postionTest=true
    var cardfocus:Cards = cards[id];
    if(cardfocus.coluna == 'A FAZER'){

      for(var loop = 0; loop < cardsafazer.length; loop++){

        if(cardsafazer[loop].indice == id && cardsafazer[cardsafazer.length-1].indice !=id){

          var position:number = cardsafazer[loop+1].indice;
          cards.splice(id,1);
          postionTest=false;
          return cards.splice(position,0,cardfocus);
        }
       }

       if(postionTest){

        cards.splice(id,1);
        return cards.splice(0,0,cardfocus);
      }
    }

    if(cardfocus.coluna == 'EM ANDAMENTO'){

      for(var loop = 0; loop < cardsandamento.length; loop++){

        if(cardsandamento[loop].indice == id && cardsandamento[cardsandamento.length-1].indice !=id){

          var position:number = cardsandamento[loop+1].indice;
          cards.splice(id,1);
          postionTest=false;
          return cards.splice(position,0,cardfocus);
        }
       }

       if(postionTest){

        cards.splice(id,1);
        return cards.splice(0,0,cardfocus);
      }
    }


    if(cardfocus.coluna == 'FINALIZADO'){

      for(var loop = 0; loop < cardsfinalizado.length; loop++){

        if(cardsfinalizado[loop].indice == id && cardsfinalizado[cardsfinalizado.length-1].indice !=id){

          var position:number = cardsfinalizado[loop+1].indice;
          cards.splice(id,1);
          postionTest=false;
          return cards.splice(position,0,cardfocus);
        }
       }

       if(postionTest){

        cards.splice(id,1);
        return cards.splice(0,0,cardfocus);
      }
    }
  }
}
