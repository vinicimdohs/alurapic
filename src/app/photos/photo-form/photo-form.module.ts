import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { VmessagemModule } from "src/app/shared/components/vmessage/vmessagem.module";
import { PhotoModule } from "../photo/photo.module";
import { PhotoFormComponent } from "./photo-form.component";

@NgModule({
    declarations: [PhotoFormComponent]
    ,
  imports:[
    CommonModule,
    ReactiveFormsModule,
    VmessagemModule,
    FormsModule,
    RouterModule ,
    PhotoModule
  ]
})
export class photoFormModule{}
