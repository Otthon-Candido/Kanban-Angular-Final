import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NamesComponent } from "./names.components";

@NgModule({
  declarations: [NamesComponent],
  imports: [CommonModule],

  exports: [NamesComponent],

  providers: [],
})
export class NamesModule {}
