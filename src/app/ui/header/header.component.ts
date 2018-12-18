import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.use('en-us');
  }

  switchLanguage() {
    if (this.translate.currentLang === 'en-us') {
      this.translate.use('zh-cn');
    } else {
      this.translate.use('en-us');
    }
  }
}
