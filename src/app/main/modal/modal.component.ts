import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'kb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
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
export class ModalComponent implements OnChanges {

@Input() addCard:boolean;
@Input() removeAlert:boolean;
@Input() acceptRemove:boolean;
@Input() addName:boolean;
@Input() removeCard:boolean;
@Input() changeCard:boolean;
private myState = "hide";
private allowModal = false;
private timer1;
private timer2;


  ngOnChanges(changes: SimpleChanges) {

    if(this.allowModal){

      if(changes.changeCard){

          clearTimeout(this.timer1);
          clearTimeout(this.timer2);
          this.openModalChangeCard();

      }


      if(changes.removeCard){

          clearTimeout(this.timer1);
          clearTimeout(this.timer2);
          this.openModalAcceptRemove();

      }


    if(changes.addName){

          clearTimeout(this.timer1);
          clearTimeout(this.timer2);
          this.openModalAddName();

    }

    if(changes.addCard){

        clearTimeout(this.timer1);
        clearTimeout(this.timer2);
        this.openModalAddCard();

    }

      if(changes.removeAlert){

        this.openModalRemoveAlert();

    }


    if(changes.acceptRemove){

        clearTimeout(this.timer1);
        clearTimeout(this.timer2);
        this.openModalAcceptRemove();

    }
  }

  else{

  this.allowModal = true;
  }

  }



  openModalAddName() {

    this.myState = "show";
    let modal = document.getElementById("dv-modal4");

    modal.style.display = 'Block';

   this.timer1 = setTimeout(()=>{
      this.myState = "hide";
  },1200);

  this.timer2 = setTimeout(()=>{
      let modal = document.getElementById("dv-modal4");
      modal.style.display = 'none';
  },1700);

  }


  closeModalAddName() {

    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
    this.myState = "hide";
    setTimeout(function(){

      let modal = document.getElementById("dv-modal4");

      modal.style.display = 'none';
  },500);
  }


  openModalAddCard() {

    this.myState = "show";
    let modal = document.getElementById("dv-modal");

    modal.style.display = 'Block';

   this.timer1 = setTimeout(()=>{
      this.myState = "hide";
  },1200);

  this.timer2 = setTimeout(()=>{
      let modal = document.getElementById("dv-modal");
      modal.style.display = 'none';
  },1700);

  }


  closeModalAddCard() {

    this.myState = "hide";
    setTimeout(function(){

      let modal = document.getElementById("dv-modal");

      modal.style.display = 'none';
  },500);

  }


  openModalAcceptRemove() {

    this.myState = "show";
    let modal = document.getElementById("dv-modal3");

    modal.style.display = 'Block';

   this.timer1 = setTimeout(()=>{
      this.myState = "hide";
  },1200);

  this.timer2 = setTimeout(()=>{
      let modal = document.getElementById("dv-modal3");
      modal.style.display = 'none';
  },1700);

  }

  closeModalAcceptRemove() {

    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
    this.myState = "hide";
    setTimeout(function(){

      let modal = document.getElementById("dv-modal3");

      modal.style.display = 'none';
  },500);
  }


  openModalChangeCard() {

    this.myState = "show";
    let modal = document.getElementById("dv-modal5");

    modal.style.display = 'Block';

   this.timer1 = setTimeout(()=>{
      this.myState = "hide";
  },1200);

  this.timer2 = setTimeout(()=>{
      let modal = document.getElementById("dv-modal5");
      modal.style.display = 'none';
  },1700);

  }

  closeModalChangeCard() {

    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
    this.myState = "hide";
    setTimeout(function(){

      let modal = document.getElementById("dv-modal5");

      modal.style.display = 'none';
  },500);
  }


  openModalRemoveAlert() {

    this.myState = "show";
    let modal = document.getElementById("dv-modal2");

    modal.style.display = 'Block';

}


 closeModalRemoveAlert() {

  this.myState = "hide";
  setTimeout(function(){

    let modal = document.getElementById("dv-modal2");

    modal.style.display = 'none';
},500);

}

}
