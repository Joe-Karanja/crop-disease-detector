import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  analysisData = [
    { name: "January", value: 150000 },
    { name: "February", value: 55000 },
    { name: "March", value: 15000 },
    { name: "April", value: 105000 },
    { name: "May", value: 20000 },
    { name: "June", value: 150000 },
    { name: "July", value: 55000 },
    { name: "August", value: 15000 },
    { name: "September", value: 105000 },
    { name: "October", value: 20000 },
    { name: "November", value: 105000 },
    { name: "December", value: 20000 }
  ];

}
