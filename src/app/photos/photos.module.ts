import { NgModule } from "@angular/core";

import { PhotoModule } from "./photo/photo.module";
import { photoFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";


@NgModule({
   imports : [
              PhotoModule,
              photoFormModule,
              PhotoListModule,
            ]
})
export class PhotosModule{

}
