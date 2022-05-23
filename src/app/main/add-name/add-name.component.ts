import { Names } from '../names/names';
import { Component, EventEmitter,OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { LocalStorageService } from '../services/local-storege.service';


@Component({

  selector: 'kb-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css']
})


export class AddNameComponent  implements OnInit{


  @Output() addModalName = new EventEmitter<any>();
  @Output() addName = new EventEmitter<any>();

  private names:Names[];
  private namesForm:string[];
  private debounce: Subject<string> = new Subject<string>();
  private repeatedName:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private localStorege: LocalStorageService,
    ){}

loginForm:FormGroup;


ngOnInit() {

  this.debounce.subscribe(input => {
  this.inputFormName(input)

  })

  this.loginForm = this.formBuilder.group({
    userName:['',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]
  ]
    })
}

  inputFormName(input){

    var input = document.querySelector("#user") as any
    var botao = document.getElementById("botao") as any
    this.repeatedName = false;


    var namesInput:Names[] = this.localStorege.getNames()

     namesInput.forEach(element => {
       var names:string = element.names.toString()

      if(input.value.toUpperCase() == names.toUpperCase()){

        botao.disabled = true;
        this.repeatedName = true;
      }
     });

     if(!this.repeatedName){
       botao.disabled = false;
     }


     if(input.value.match(/^(\s)+$/)){
      botao.disabled = true;
     }

     if(input.value.length > 15){
      botao.disabled = true;
     }

     if(input.value.length < 3){
      botao.disabled = true;
     }
  }


adicionar(){

  this.namesForm = this.loginForm.get('userName').value;

  if(this.localStorege.getNames() != undefined){
  this.names = this.localStorege.getNames();
  }

  else{
    this.names = []
  }

  this.loginForm = this.formBuilder.group({
    userName:['',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
  ]]

    })

        var valorEmitir  = {
          names: this.namesForm,
          indice: 0
        }

        this.names.push(valorEmitir);

        for(var cont = 0; cont < this.names.length; cont++){

          this.names[cont].indice = cont;
        }

        this.localStorege.set('name',this.names);
        this.addModalName.emit();
        this.addName.emit();

}
}
