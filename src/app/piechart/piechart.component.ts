import { Component, OnInit } from '@angular/core';

@Component
({
    selector: 'app-piechart',
    templateUrl: 'piechart.component.html',
    styleUrls:['/piechart.component.css']
})

export class PieChart implements OnInit 
{
    data= {
        labels: ["Absent","Presenti"],
        datasets: [{
          data: [30,70],
          backgroundColor: [
            "#ff0000",
            "#3cb371"
          ]
        }]
      }
    constructor() { }

    ngOnInit() { }
}