import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { IssuesComponent } from './issues/issues.component';
import { CodeComponent } from './code/code.component';
import { WikiComponent } from './wiki/wiki.component';
import { PullRequestComponent } from './pull-request/pull-request.component';
import { ProjectsComponent } from './projects/projects.component';
import { InsightsComponent } from './insights/insights.component';
import { TimeAgoPipe } from 'time-ago-pipe';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'Issues' , pathMatch: 'full'},
    { path: 'Issues', component:IssuesComponent},
    { path: 'Wiki', component:WikiComponent},
    { path: 'Projects', component:ProjectsComponent},
    { path: 'PullRequests', component:PullRequestComponent},
    { path: 'Code', component:CodeComponent},
    { path: 'Insights', component:InsightsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    CodeComponent,
    WikiComponent,
    PullRequestComponent,
    ProjectsComponent,
    InsightsComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
