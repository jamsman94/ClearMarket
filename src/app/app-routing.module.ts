import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './index/about/about.component';
import { WrapperComponent } from './index/wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: IndexComponent, children: [
      { path: 'about', component: AboutComponent, outlet: 'index'},
      { path: '', component: WrapperComponent, outlet: 'index'}
    ]
  },
  { path: 'portfolio/:id', component: ReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
