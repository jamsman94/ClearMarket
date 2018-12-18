import { Component, OnInit } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { SwiperText } from '../../common/SwiperText';

@Component({
  selector: 'app-swiper-intro',
  templateUrl: './swiper-intro.component.html',
  styleUrls: ['./swiper-intro.component.css']
})
export class SwiperIntroComponent implements OnInit {
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false
  };
  constructor() { }

  ngOnInit() {
  }

}
