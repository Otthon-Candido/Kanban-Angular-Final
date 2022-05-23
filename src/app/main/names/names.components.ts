import { Cards } from '../build-card/card';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storege.service';
import { Names } from './names';



@Component({
  selector: 'kb-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})


export class NamesComponent implements OnChanges{


@Input()  addNameVar:string[] = [];
@Output() removeAlert = new EventEmitter<any>();
@Output() acceptAlert = new EventEmitter<any>();
@Output() addName = new EventEmitter<string>();


private cards:Cards[] = [];
private userNames:Names[] = [];
private size:number = 0;
private status:string;
private verification:boolean;

constructor(
  private localStorege:LocalStorageService
){
}

ngOnInit(): void {
  this.empty();
  this.status = 'alphaAsc'
  this.sortAlphaAsc();
}

ngOnChanges(simple:SimpleChanges) {


  if(simple.addNameVar){

  this.userNames = this.localStorege.getNames();


   if(this.userNames!=null){
  this.size = this.userNames.length;
  }

  switch(this.status){

    case 'sortAsc':
      this.sortAlphaAsc()
      break;

    case 'sortDesc':
    this.sortAlphaDesc()
    break;

  }
  }
  this.empty();

}



 remove(indice:number){

  this.userNames = this.localStorege.getNames();
  var nameExist:boolean = true;
  this.cards = this.localStorege.getCards();


  if(this.cards!=null){

  for(var cont=0; cont<this.cards.length;cont++){

    if(this.cards[cont].user == this.userNames[indice].names ){
      this.removeAlert.emit();
      nameExist = false;
  break;

   }

  }
  if(nameExist){

    this.userNames.splice(indice,1);

    for(var cont = 0; cont < this.userNames.length; cont++){
      this.userNames[cont].indice = cont;
    }

    this.localStorege.set('name',this.userNames);
    this.addName.emit();
    this.acceptAlert.emit();

  }
}

this.empty();


}


empty(){

  if(this.userNames.length ==0){
    this.verification = false;
  }

  else{
    this.verification = true;
  }
}

sortAlphaDesc(){

  this.status = "sortDesc";

  this.userNames.sort(function(a:any, b:any):any {

    if(a.names.toUpperCase() > b.names.toUpperCase()) {
      return -1;
    } else {
      return true;
    }
    });


    let alphaAsc = document.getElementById("alphaAsc");
    alphaAsc.style.backgroundColor = 'white' ;
    let alphaDesc = document.getElementById("alphaDesc");
    alphaDesc.style.backgroundColor = 'rgb(198, 247, 253)';

    for(var cont =0;cont < this.userNames.length; cont++){
      this.userNames[cont].indice = cont;
    }

    this.localStorege.set('name',this.userNames);



}

sortAlphaAsc(){

  this.status = "sortAsc";

  this.userNames.sort(function(a:any, b:any):any {

    if(a.names.toUpperCase() < b.names.toUpperCase()) {
      return -1;
    } else {
      return true;
    }
    });


    let alphaAsc = document.getElementById("alphaAsc");
    alphaAsc.style.backgroundColor = 'rgb(198, 247, 253)';
    let alphaDesc = document.getElementById("alphaDesc");
    alphaDesc.style.backgroundColor = 'white';

    for(var cont =0;cont < this.userNames.length; cont++){
      this.userNames[cont].indice = cont;
    }

    this.localStorege.set('name',this.userNames);




}
}





