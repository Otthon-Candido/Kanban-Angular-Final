import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormCardComponent } from "./form-card.component";

@NgModule({
  declarations: [FormCardComponent],
  imports: [CommonModule, ReactiveFormsModule],

  exports: [FormCardComponent],

  providers: [],
})
export class FormCardModule {}
