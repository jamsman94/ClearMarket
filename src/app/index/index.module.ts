import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { StatsComponent } from './stats/stats.component';
import { GraphExampleComponent } from './graph-example/graph-example.component';
import { SwiperIntroComponent } from './swiper-intro/swiper-intro.component';
import { ContactComponent } from './contact/contact.component';
import { PartnerComponent } from './partner/partner.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { AboutComponent } from './about/about.component';
import { UiModule } from '../ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
// Translate module
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Swiper module
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';

// Translate file source
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}
// default swiper settings
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 1
};
@NgModule({
  declarations: [
    IndexComponent,
    WelcomeComponent,
    IntroductionComponent,
    StatsComponent,
    GraphExampleComponent,
    SwiperIntroComponent,
    ContactComponent,
    PartnerComponent,
    WrapperComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    UiModule,
    HttpClientModule,
    SwiperModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ]
})
export class IndexModule { }
