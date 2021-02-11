import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos : any[] = [];

  constructor(private photoService : PhotoService ,
    private activatedRoute : ActivatedRoute)
    {}

  //nome tem que estar desse jeito
  ngOnInit() : void {

    const userName = this.activatedRoute.snapshot.params.userName;

    this.photoService
    .listFromUser(userName)
    .subscribe(photos => {
      console.log(photos[0].description)
      this.photos = photos
    });
  }

}
