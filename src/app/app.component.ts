import { Component, HostListener, OnInit } from '@angular/core';

import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sadichhya';
  anio: number = new Date().getFullYear();
  windowScrolled = false;

  constructor(private wowService: NgwWowService) {
  }

  ngOnInit(): void {
    this.wowService.init();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (window.pageYOffset >= window.innerHeight - 69) {
      this.windowScrolled = true;
    } else {
      this.windowScrolled = false;
    }
  }
}

