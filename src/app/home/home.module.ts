import { NgModule } from "@angular/core";
import { SiginComponent } from "./signin/sigin.component";
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from "@angular/common";
import { VmessagemModule } from "../shared/components/vmessage/vmessagem.module";
import { RouterModule } from "@angular/router";
import { SignUpComponent } from "./signup/signup.component";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [SiginComponent,
                SignUpComponent,
                HomeComponent
  ],
  imports: [CommonModule,
           FormsModule,
            ReactiveFormsModule,
            VmessagemModule,
            RouterModule,
            ]
})
export class HomeModule {}
