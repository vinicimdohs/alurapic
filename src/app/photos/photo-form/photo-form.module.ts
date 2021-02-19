import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VmessagemModule } from "src/app/shared/components/vmessage/vmessagem.module";
import { PhotoFormComponent } from "./photo-form.component";

@NgModule({
    declarations: [PhotoFormComponent]
    ,
  imports:[
    CommonModule,
    ReactiveFormsModule,
    VmessagemModule,
    FormsModule
                  ]
})
export class photoFormModule{}
