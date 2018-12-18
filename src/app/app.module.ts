import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Translate module
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Swiper module
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { WelcomeComponent } from './index/welcome/welcome.component';
import { IndexComponent } from './index/index/index.component';
import { ContactComponent } from './index/contact/contact.component';
import { GraphExampleComponent } from './index/graph-example/graph-example.component';
import { IntroductionComponent } from './index/introduction/introduction.component';
import { PartnerComponent } from './index/partner/partner.component';
import { StatsComponent } from './index/stats/stats.component';
import { SwiperIntroComponent } from './index/swiper-intro/swiper-intro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about/about.component';

// Translate file source
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
// default swiper settings
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 1
};
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    IndexComponent,
    ContactComponent,
    GraphExampleComponent,
    IntroductionComponent,
    PartnerComponent,
    StatsComponent,
    SwiperIntroComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
