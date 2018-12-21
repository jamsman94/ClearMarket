import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { AccountServiceService } from '../common/account-service.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  private userId: string;
  private sub: any;

  constructor(private translate: TranslateService, private routerInfo: ActivatedRoute, private accountService: AccountServiceService) { }

  ngOnInit() {
    this.sub = this.routerInfo.params.subscribe(params => {
      this.userId = params['id'];
    });
    this.translate.use('en-us');
    console.log(this.userId);
    this.accountService.queryToken(this.userId).subscribe(data => {
      console.log(data);
    });
  }

  switchLanguage() {
    if (this.translate.currentLang === 'en-us') {
      this.translate.use('zh-cn');
    } else {
      this.translate.use('en-us');
    }
  }

}
