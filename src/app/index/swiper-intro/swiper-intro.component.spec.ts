import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperIntroComponent } from './swiper-intro.component';

describe('SwiperIntroComponent', () => {
  let component: SwiperIntroComponent;
  let fixture: ComponentFixture<SwiperIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
