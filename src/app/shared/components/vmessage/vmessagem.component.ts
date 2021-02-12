import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-vmessagem',
  templateUrl:'./vmessagem.component.html'
})
export class VmessageComponent{

  @Input() text = '';

}
