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
        labels: ["Book1", "Book2","Book3", "Book4"],
        datasets: [{
          data: [10, 20, 5, 30],
          backgroundColor: [
            "#00FFFF",
            "#E0FFFF",
            "#00FFFF",
            "#7FFFD4"
          ]
        }]
      }
    constructor() { }

    ngOnInit() { }
}