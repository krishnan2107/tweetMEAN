import { Component, OnInit } from '@angular/core';
import {TweetService} from '../Shared/tweet.service';
import {sentimentModel} from '../Shared/sentiment.model';
import {Chart, ChartOptions, ChartType} from 'chart.js';
import {Observable} from "rxjs";
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from 'ng2-charts';

@Component({
  selector: 'app-tweetpie',
  templateUrl: './tweetpie.component.html',
  styleUrls: ['./tweetpie.component.css'],
  providers: [TweetService]
})
export class TweetpieComponent implements OnInit {
  private data: sentimentModel[];

  count = [];
  id = [];
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['SciFi'], ['Drama'], 'Comedy'];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(public _tweet: TweetService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {

    this.refreshSentimentList();
  }

  refreshSentimentList(): void{
    this._tweet.getAgg().subscribe((res) => {
      this._tweet.sentimentModels = res as sentimentModel[];
      this.data = res as sentimentModel[];

      this.drawPieChart();
      console.log(this.data);
    });
  }

  drawPieChart(): void {
    this.pieChartData =[];
    this.pieChartLabels = [];
    for (let d in this.data) {
      this.pieChartLabels.push((this.data)[d]._id);
      this.pieChartData.push((this.data)[d].count);
    }


  }

}
