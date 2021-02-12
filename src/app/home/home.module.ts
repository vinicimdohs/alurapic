import { NgModule, OnInit } from "@angular/core";
import { SiginComponent } from "./signin/sigin.component";
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [SiginComponent],
  imports: [CommonModule
          ,ReactiveFormsModule]
})
export class HomeModule {}
