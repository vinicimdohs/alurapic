import { Input } from "@angular/core";
import { Component } from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() title : string = '';
}
