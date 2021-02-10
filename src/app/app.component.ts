import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 photos = [
   {
    url:
    'https://st2.depositphotos.com/1036149/5381/i/600/depositphotos_53811511-stock-photo-duck-with-sunglasses.jpg',
    description: 'vagalume'
   },
   {
    url:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Pato.jpg/1200px-Pato.jpg',
    description: 'patao'
   }
 ]
}
