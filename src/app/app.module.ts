import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {EventsListComponent} from "./events-list/events-list.component";
import {EventCardService} from "./event-card.service";
import {BrowserModule} from "@angular/platform-browser";
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import {ChartComponent} from "./chart/chart.component";
import {AnalyticsService} from "./analytics.service";

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    CanvasJSAngularChartsModule
  ],
  providers: [
    EventCardService,
    AnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
