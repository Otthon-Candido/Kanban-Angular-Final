import { Names } from './../names/names';
import { Cards } from './../build-card/card';
import { Component, OnInit} from '@angular/core';
import { LocalStorageService } from '../services/local-storege.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'kb-user-estimativa',
  templateUrl: './user-estimativa.component.html',
  styleUrls: ['./user-estimativa.component.css'],
  animations: [

    trigger('btnState', [
    state('hide', style({
     opacity: '0',
    })),
    state('show', style({
      opacity: '1',

    })),
    transition('show => hide', animate('500ms ease-out')),
    transition('hide => show', animate('300ms ease-in'))
  ]),
  ]
})


export class UserEstimativaComponent implements OnInit{
  constructor(
    private localStorage:LocalStorageService
  ){

  }

private cards:Cards[];
private names:Names[];
private estimativaNames:any[] =[];
private estimativaCards:any[] = []
private estimativa:any
private estimativaFinalizado:any
private teste:any[];
private myState6= "hide";
private status:string;
private verification:boolean;

ngOnInit(): void {

  this.renderizar();
  this.sortAlpha();

}

renderizar(){


  this.estimativaNames = [];
  this.estimativaCards = [];
  this.teste = [];


 this.cards =  this.localStorage.getCards();
 this.names = this.localStorage.getNames();
 this.empty();


 for(var cont = 0; cont < this.names.length;cont++){
  this.estimativa = 0;
  this.estimativaFinalizado = 0;

  this.estimativaNames.push( this.names[cont].names)

  for(var cont2 =0; cont2 < this.cards.length; cont2++){

  if(this.names[cont].names == this.cards[cont2].user){

  this.estimativa = this.estimativa + this.cards[cont2].estimativa;

  }

  if(this.names[cont].names == this.cards[cont2].user && this.cards[cont2].coluna =='FINALIZADO'){

    this.estimativaFinalizado = this.estimativaFinalizado + this.cards[cont2].estimativa

  }
  }




  if(this.estimativaFinalizado!=0 && this.estimativa !=0){

    this.estimativaFinalizado = (this.estimativaFinalizado / this.estimativa)*100
    if(parseInt(this.estimativaFinalizado) != parseFloat(this.estimativaFinalizado)) {
      this.estimativaFinalizado = this.estimativaFinalizado.toFixed(1) + '% das story points finalizadas'
    }

    else{
      this.estimativaFinalizado = this.estimativaFinalizado + '% das story points finalizadas'
    }

    }

  if(this.estimativaFinalizado==0 && this.estimativa !=0){
    this.estimativaFinalizado = 'Nenhuma atividade Finalizada'
  }

  if(this.estimativa == 0){
    this.estimativaFinalizado = 'Sem Atividade'
  }



this.estimativaCards[cont] = this.estimativa;

var valorEmitir  = {
  nome: this.names[cont].names,
  estimativa: this.estimativa,
  estimativaFinalizada:this.estimativaFinalizado
};

this.teste.push(valorEmitir);
 }


}

sortAlpha(){
  this.renderizar();
  this.status = "sortAlpha";

  this.teste.sort(function(a, b):any {

    if(a.nome.toUpperCase() < b.nome.toUpperCase()) {
      return -1;
    } else {
      return true;
    }
    });


    let alpha = document.getElementById("alpha");
    alpha.style.backgroundColor = 'rgb(198, 247, 253)';
    let numericDesc = document.getElementById("numericDesc");
    let numericAsc = document.getElementById("numericAsc");
    numericAsc.style.backgroundColor = 'white';
    numericDesc.style.backgroundColor = 'white';

}

sortNumericDesc(){

  this.renderizar();
  this.status = "sortNumericDesc"

  this.teste.sort(function(a, b):any {

    if(a.nome.toUpperCase() < b.nome.toUpperCase()) {
      return -1;
    } else {
      return true;
    }
    });

  this.teste.sort(function(a, b):any {
    if(a.estimativa > b.estimativa) {
      return -1;
    } else {
      return true;
    }
    });

    let numericDesc = document.getElementById("numericDesc");
    numericDesc.style.backgroundColor = 'rgb(198, 247, 253)';
    let alpha = document.getElementById("alpha");
    let numericAsc = document.getElementById("numericAsc");
    alpha.style.backgroundColor = 'white';
    numericAsc.style.backgroundColor = 'white';

}

sortNumericAsc(){

  this.renderizar();
  this.status = "sortNumericAsc"

  this.teste.sort(function(a, b):any {

    if(a.nome.toUpperCase() < b.nome.toUpperCase()) {
      return -1;
    } else {
      return true;
    }
    });

  this.teste.sort(function(a, b):any {
    if(a.estimativa < b.estimativa) {
      return -1;
    } else {
      return true;
    }
    });
    let numericAsc = document.getElementById("numericAsc");
    numericAsc.style.backgroundColor = 'rgb(198, 247, 253)';
    let alpha = document.getElementById("alpha");
    let numericDesc = document.getElementById("numericDesc");
    alpha.style.backgroundColor = 'white';
    numericDesc.style.backgroundColor = 'white';
}

empty(){

  if(this.names.length ==0){
    this.verification = false;
  }

  else{
    this.verification = true;
  }
}


openUser(){

  switch(this.status){
    case 'sortAlpha':
   this.sortAlpha();
   break;
   case 'sortNumericDesc':
   this.sortNumericDesc();
   break;
   case 'sortNumericAsc':
    this.sortNumericAsc();
    break;
   }

  this.myState6 = "show";
  var names = document.getElementById("names");
  names.style.display = 'Block';

}

closeModal() {

  this.myState6 = "hide";
  setTimeout(function(){

    let modalNames = document.getElementById("names");



    modalNames.style.display = 'none';

},500);

}

}
