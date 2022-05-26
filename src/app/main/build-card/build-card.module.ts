import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BuildCardComponent } from "./build-card.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [BuildCardComponent],
  imports: [CommonModule, ReactiveFormsModule, BrowserAnimationsModule],

  exports: [BuildCardComponent],

  providers: [],
})
export class BuildCardModule {}
