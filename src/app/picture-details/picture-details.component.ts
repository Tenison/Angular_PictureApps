import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent implements OnInit {
  @Input() lastImage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
