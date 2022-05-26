import { EstimativaService } from "./../services/estimativa.service";
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

@Component({
  selector: "kb-modal-coluna",
  templateUrl: "./modal-estimativa-coluna.component.html",
  styleUrls: ["./modal-estimativa-coluna.component.css"],
  animations: [
    trigger("btnState", [
      state(
        "hide",
        style({
          opacity: "0",
        })
      ),
      state(
        "show",
        style({
          opacity: "1",
        })
      ),
      transition("show => hide", animate("500ms ease-out")),
      transition("hide => show", animate("300ms ease-in")),
    ]),
  ],
})
export class ModalEstimativaColunaComponent implements OnChanges {
  constructor(private estimativaService: EstimativaService) {}
  private myState5 = "hide";

  private allowModal = false;
  private cards;
  private afazerEstimativa = 0;
  private estimativaTotal;
  private porcentagem;
  @Input() colunaAfazer: string;
  @Input() colunaAndamento: string;
  @Input() colunaFinalizado: string;

  ngOnChanges(changes: SimpleChanges) {
    if (this.allowModal) {
      if (changes.colunaAfazer) {
        this.openModal("A FAZER");
      }

      if (changes.colunaAndamento) {
        this.openModal("EM ANDAMENTO");
      }

      if (changes.colunaFinalizado) {
        this.openModal("FINALIZADO");
      }
    } else {
      this.allowModal = true;
    }
  }

  openModal(coluna) {
    switch (coluna) {
      case "A FAZER":
        this.estimativaTotal = this.estimativaService.estimativaTotal();
        if (this.estimativaTotal != 0) {
          this.porcentagem = this.estimativaService.getAfazerPorcentagem();
        } else {
          this.porcentagem = 0;
        }

        this.myState5 = "show";
        var afazer = document.getElementById("afazer-modal");
        afazer.style.display = "Block";
        console.log(afazer);

        break;

      case "EM ANDAMENTO":
        this.estimativaTotal = this.estimativaService.estimativaTotal();

        if (this.estimativaTotal != 0) {
          this.porcentagem = this.estimativaService.getAndamentoPorcentagem();
        } else {
          this.porcentagem = 0;
        }

        this.myState5 = "show";
        var andamento = document.getElementById("andamento-modal");

        andamento.style.display = "Block";

        break;

      case "FINALIZADO":
        this.estimativaTotal = this.estimativaService.estimativaTotal();
        if (this.estimativaTotal != 0) {
          this.porcentagem = this.estimativaService.getFinalizadoPorcentagem();
        } else {
          this.porcentagem = 0;
        }

        this.myState5 = "show";
        let finalizado = document.getElementById("finalizado-modal");

        finalizado.style.display = "Block";
        break;
    }
  }

  closeModal() {
    this.myState5 = "hide";
    setTimeout(function () {
      let modalAfazer = document.getElementById("afazer-modal");
      let modalAndamento = document.getElementById("andamento-modal");
      let modalFinalizado = document.getElementById("finalizado-modal");

      modalAfazer.style.display = "none";
      modalAndamento.style.display = "none";
      modalFinalizado.style.display = "none";
    }, 500);
  }
}
