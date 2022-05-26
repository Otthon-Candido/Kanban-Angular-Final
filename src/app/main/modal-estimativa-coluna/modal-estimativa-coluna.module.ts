import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModalEstimativaColunaComponent } from "./modal-estimativa-coluna.component";

@NgModule({
  declarations: [ModalEstimativaColunaComponent],
  imports: [CommonModule],

  exports: [ModalEstimativaColunaComponent, BrowserAnimationsModule],

  providers: [],
})
export class ModalEstimativaColunaModule {}
