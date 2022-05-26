import { ModalEstimativaColunaModule } from "./modal-estimativa-coluna/modal-estimativa-coluna.module";
import { ModalModule } from "./modal/modal.module";
import { FormCardModule } from "./form-card/form-card.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddNameModule } from "./add-name/add-name.module";
import { NamesModule } from "./names/names.module";
import { BuildCardModule } from "./build-card/build-card.module";
import { MainComponent } from "./main.component";
import { UserEstimativaModule } from "./user-estimativa/user-estimativa.module";
import { AgradecimentoModule } from "./agradecimento/agradecimento.module";

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    AddNameModule,
    NamesModule,
    FormCardModule,
    BuildCardModule,
    ModalModule,
    ModalEstimativaColunaModule,
    UserEstimativaModule,
    AgradecimentoModule,
  ],

  exports: [MainComponent],

  providers: [],
})
export class MainModule {}
