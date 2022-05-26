import { Component } from "@angular/core";

@Component({
  selector: "main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent {
  private removeAlert: boolean = false;
  private acceptRemove: boolean = false;
  private addCard: boolean = false;
  private addModalName: boolean = false;
  private removeCard: boolean = false;
  private addNameVar: boolean = false;
  private editCard: boolean = false;
  private varColunaEstimativaAfazer: boolean = false;
  private varColunaEstimativaAndamento: boolean = false;
  private varColunaEstimativaFinalizado: boolean = false;

  estimativaModalColuna(coluna: string) {
    switch (coluna) {
      case "A FAZER":
        if (this.varColunaEstimativaAfazer) {
          this.varColunaEstimativaAfazer = false;
        } else {
          this.varColunaEstimativaAfazer = true;
        }
        break;

      case "EM ANDAMENTO":
        if (this.varColunaEstimativaAndamento) {
          this.varColunaEstimativaAndamento = false;
        } else {
          this.varColunaEstimativaAndamento = true;
        }
        break;

      case "FINALIZADO":
        if (this.varColunaEstimativaFinalizado) {
          this.varColunaEstimativaFinalizado = false;
        } else {
          this.varColunaEstimativaFinalizado = true;
        }
        break;
    }
  }

  ActualizeNameVar() {
    if (this.addNameVar) {
      this.addNameVar = false;
    } else {
      this.addNameVar = true;
    }
  }

  modalEditCard() {
    if (this.editCard) {
      this.editCard = false;
    } else {
      this.editCard = true;
    }
  }

  modalRemoveCard() {
    if (this.removeCard) {
      this.removeCard = false;
    } else {
      this.removeCard = true;
    }
  }

  modalAddName() {
    if (this.addModalName) {
      this.addModalName = false;
    } else {
      this.addModalName = true;
    }
  }

  modalRemoveAlert() {
    if (this.removeAlert) {
      this.removeAlert = false;
    } else {
      this.removeAlert = true;
    }
  }

  modalAcceptRemove() {
    if (this.acceptRemove) {
      this.acceptRemove = false;
    } else {
      this.acceptRemove = true;
    }
  }

  modalAddCard() {
    if (this.addCard) {
      this.addCard = false;
    } else {
      this.addCard = true;
    }
  }
}
