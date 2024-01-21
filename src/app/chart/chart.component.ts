import {Component, OnInit} from '@angular/core';
import {EventCardService} from "../event-card.service";
import {AnalyticsService} from "../analytics.service";
import {Analytics} from "../analytics.interface";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {
  analytics: Analytics | undefined;
  datas: { name: string; y: number; }[] = [];

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit(): void {
    this.analyticsService.getEvents().subscribe((analytics) => {
      this.analytics = analytics;
      for (let i = 0; i < analytics.events.length; i++)
      {
        this.datas.push({name: analytics.events[i].name, y: analytics.events[i].count})
      }
      console.log(this.datas)
    });};

  getChartOptions(): any {
    return {
      animationEnabled: true,
      theme: "dark2",
      exportEnabled: true,
      title: {
        text: "Events analytics"
      },
      subtitles: [{
        text: "Количество событий пользователя"
      }],
      data: [{
        type: "pie", //change type to column, line, area, doughnut, etc
        indexLabel: "{name}: {y}",
        dataPoints: this.datas
      }]
    }
  }
}
