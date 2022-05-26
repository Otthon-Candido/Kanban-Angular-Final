import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModalComponent } from "./modal.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, BrowserAnimationsModule],

  exports: [ModalComponent],

  providers: [],
})
export class ModalModule {}
