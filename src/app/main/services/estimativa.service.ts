import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storege.service';


@Injectable({ providedIn: 'root' })
export class EstimativaService {

  constructor(private localStorage:LocalStorageService){}
  private afazerEstimativa =0;
  private varestimativaTotal
  private porcentagem
  private cards



  estimativaTotal(){
    this.cards = this.localStorage.getCards();
    this.varestimativaTotal =0;
    this.cards.forEach(cards => {

    this.varestimativaTotal = cards.estimativa +  this.varestimativaTotal


  });


  return this.varestimativaTotal

  }

  getAfazerPorcentagem(){
    this.estimativaTotal()
  this.afazerEstimativa = 0;
  this.cards.forEach(cards => {

    if(cards.coluna =='A FAZER'){
      this.afazerEstimativa = this.afazerEstimativa + cards.estimativa;
    }
  })
  if(this.varestimativaTotal!=0){
  this.porcentagem = (this.afazerEstimativa / this.varestimativaTotal)*100;
  this.porcentagem =  Math.round(this.porcentagem)
  return this.porcentagem;
  }
  else{
    return 0;
  }

  }

  getAndamentoPorcentagem(){
    this.estimativaTotal()
  this.afazerEstimativa = 0;
  this.cards.forEach(cards => {

    if(cards.coluna =='EM ANDAMENTO'){
      this.afazerEstimativa = this.afazerEstimativa + cards.estimativa;
    }
  })
  if(this.varestimativaTotal!=0){
  this.porcentagem = (this.afazerEstimativa / this.varestimativaTotal)*100;
  this.porcentagem =  Math.round(this.porcentagem)
  return this.porcentagem;
  }
  else{
    this.porcentagem = 0;
    return this.porcentagem
  }

  }

  getFinalizadoPorcentagem(){
    this.estimativaTotal()
  this.afazerEstimativa = 0;
  this.cards.forEach(cards => {

    if(cards.coluna =='FINALIZADO'){
      this.afazerEstimativa = this.afazerEstimativa + cards.estimativa;
    }
  })
  if(this.varestimativaTotal!=0){
  this.porcentagem = (this.afazerEstimativa / this.varestimativaTotal)*100;
  this.porcentagem =  Math.round(this.porcentagem)
  return this.porcentagem;
  }
  else{
    return 0;
  }

  }

}
