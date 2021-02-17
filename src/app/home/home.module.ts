import { NgModule } from "@angular/core";
import { SiginComponent } from "./signin/sigin.component";
import { ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from "@angular/common";
import { VmessagemModule } from "../shared/components/vmessage/vmessagem.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [SiginComponent],
  imports: [CommonModule,
            ReactiveFormsModule,
            VmessagemModule,
            RouterModule,
            ]
})
export class HomeModule {}
