import { Component,Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})

export class DonaComponent {
  
  @Input() title: string = 'Sin titulo';

  @Input('labels') doughnutChartLabels: string [] = [ 'label1', 'label2', 'label3' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] }
    ]

    
  }; 

 public doughnutChartType: ChartType = 'doughnut';

  };

