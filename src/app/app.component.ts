import { Component } from '@angular/core';

import {ImageInfo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day1';
  pictures : ImageInfo[] = [
    {
      imageURL: "http://images.goodsmile.info/cgm/images/product/20170606/6486/45777/large/0f78fbdf148fd7d0da70b85ad091dd4d.jpg",
      comment: "This is spiderman1"
  }, {
    imageURL: "https://www.wikihow.com/images/b/ba/Draw-Spider-Man-Step-11-Version-2.jpg",
    comment: "This is spiderman2"
  }, {
    imageURL: "http://media.comicbook.com/2018/01/spider-man-logos-comicbookcom-1078523-1280x0.jpeg",
    comment: "This is spiderman3"
  }
];
}
