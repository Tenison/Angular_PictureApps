import { Component, OnInit } from '@angular/core';
import { Images } from '../shared/images'


@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
  imageUrl : Images[] = [{
    imageUrl: '/assets/images/1.jpg'
  },{
    imageUrl: '/assets/images/2.jpg'
  },{
    imageUrl: '/assets/images/3.jpg'
  },{
    imageUrl: '/assets/images/4.jpg'
  },{
    imageUrl: '/assets/images/5.jpg'
  },{
    imageUrl: '/assets/images/6.jpg'
  },{
    imageUrl: '/assets/images/7.jpg'
  }];

  selectedImage: any;

  constructor() { }

  imageselect(data:any) {
    this.selectedImage = data;
  }

  ngOnInit(): void {
  }

}
