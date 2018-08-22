import { Component, OnInit, Input } from '@angular/core';

import { ImageInfo } from '../model';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  @Input() picture: ImageInfo;// define attributes

  constructor() { }

  ngOnInit() {
    console.log(">>>",this.picture);
  }

}
