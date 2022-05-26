import { Cards } from "../build-card/card";
import { LocalStorageService } from "../services/local-storege.service";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "kb-form-card",
  templateUrl: "./form-card.component.html",
  styleUrls: ["./form-card.component.css"],
})
export class FormCardComponent implements OnChanges {
  @Input() private addNameVar: string[];

  @Output() addCard = new EventEmitter<string>();

  constructor(
    private formBuilder: FormBuilder,
    private localStorege: LocalStorageService
  ) {}

  addCartao: FormGroup;
  private titulo: string;
  private descricao: string;
  private user: string[];
  private estimativa: number;
  private coluna: string;
  private prioridade: string;
  private names: any[] = [];
  private namesForm: string[] = [];
  private cards: Cards[];
  private date: Date;

  ngOnChanges(SimpleChanges: SimpleChanges) {
    if (SimpleChanges.addNameVar) {
      this.names = [];
      this.namesForm = [];
      this.names = this.localStorege.getNames();

      if (this.names != null) {
        for (var cont = 0; cont < this.names.length; cont++) {
          this.namesForm.push(this.names[cont].names);
        }

        this.namesForm.sort(function (a: any, b: any): any {
          if (a < b) {
            return -1;
          } else {
            return true;
          }
        });
      }
    }
  }

  ngOnInit(): void {
    this.addCartao = this.formBuilder.group({
      titulo: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ],
      ],
      descricao: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(60),
        ],
      ],
      user: ["", [Validators.required]],
      estimativa: ["", Validators.required],
      coluna: ["A FAZER", Validators.required],
      prioridade: ["BAIXA", Validators.required],
    });
  }

  addcartao() {
    if (this.localStorege.getCards() != undefined) {
      this.cards = this.localStorege.getCards();
    } else {
      this.cards = [];
    }

    var titulo: string = this.addCartao.get("titulo").value;
    this.titulo = titulo;

    var descricao: string = this.addCartao.get("descricao").value;
    this.descricao = descricao;

    var estimativa: number = this.addCartao.get("estimativa").value;
    this.estimativa = estimativa;

    var user: string[] = this.addCartao.get("user").value;
    this.user = user;

    var coluna: string = this.addCartao.get("coluna").value;
    this.coluna = coluna;

    var prioridade: string = this.addCartao.get("prioridade").value;
    this.prioridade = prioridade;

    this.addCartao = this.formBuilder.group({
      titulo: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ],
      ],
      descricao: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(60),
        ],
      ],
      user: ["", Validators.required],
      estimativa: ["", Validators.required],
      coluna: ["A FAZER", Validators.required],
      prioridade: ["BAIXA", Validators.required],
    });

    var now = new Date();

    this.date = now;

    var valorEmitir = {
      titulo: this.titulo,
      descricao: this.descricao,
      user: this.user,
      estimativa: this.estimativa,
      coluna: this.coluna,
      indice: 0,
      prioridade: this.prioridade,
      date: this.date,
      timerDate: 0,
    };

    this.cards.push(valorEmitir);

    for (var cont = 0; cont < this.cards.length; cont++) {
      this.cards[cont].indice = cont;
    }
    this.localStorege.set("card", this.cards);

    this.addCard.emit();
  }
}
