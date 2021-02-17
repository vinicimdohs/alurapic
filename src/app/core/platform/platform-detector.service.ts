import { Inject, Injectable, PLATFORM_ID} from "@angular/core";
import{isPlatformBrowser} from '@angular/common'

@Injectable({providedIn: 'root'})
export class PlatfotmDetectorService{
  constructor(@Inject(PLATFORM_ID) private platfotmId: string){};

  isPlatformBrowser(){
      return isPlatformBrowser(this.platfotmId);
  }
}
