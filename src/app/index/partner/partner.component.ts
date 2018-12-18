import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 4,
    width: 1140
  };
  constructor() { }

  ngOnInit() {
  }

}
