import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent  {
  title = 'NG7Swiper';
  images: Array<any> = [];

  constructor() {

    this.images = [
      { name: 'http://lorempixel.com/640/480/animals/' },
      { name: 'http://lorempixel.com/640/480/abstract/' },
      { name: 'http://lorempixel.com/640/480/business/' },
      { name: 'http://lorempixel.com/640/480/cats/' },
      { name: 'http://lorempixel.com/640/480/city/' },
      { name: 'http://lorempixel.com/640/480/food/' },
      { name: 'http://lorempixel.com/640/480/nightlife/' },
      { name: 'http://lorempixel.com/640/480/fashion/' },
      { name: 'http://lorempixel.com/640/480/people/' },
      { name: 'http://lorempixel.com/640/480/nature/' },
      { name: 'http://lorempixel.com/640/480/sports/' },
      { name: 'http://lorempixel.com/640/480/transport/' },
    ];
  }
}

