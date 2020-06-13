import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from "chart.js";
import { ControlService } from '../shared/control.service';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit, OnDestroy {

  constructor(private cs: ControlService) { }

  chart: any = [];
  el: any;
  ela: any;

  ngOnInit() {

    let datas = []
    let date = []

    this.el = setInterval(() => {
      datas.push(Math.floor(Math.random() * (130 - 75) + 75));
      let today = new Date();
      date.push(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate())

      // console.log(datas)
      // console.log(date)

      this.chart = new Chart("canvas", {
        type: "line",
        data: {
          labels: date,
          datasets: [
            {
              label: "Heart Rate",
              data: datas,
              borderColor: "#ff0000",
              pointHoverRadius: 10,
              fill: false,
            },
          ],
        },
        options: {
          legend: {
            display: true,
            position: "top",
            labels: {
              fontColor: "rgb(255, 255, 255)",
              // fontSize: 25,
              // padding: 50,
            },
          },
          scales: {
            xAxes: [
              {
                display: true,
                ticks: {
                  fontColor: "white",
                },
              },
            ],
            yAxes: [
              {
                display: true,
                ticks: {
                  fontColor: "white",
                },
              },
            ],
          },
        },
      });
      clearInterval(this.el)
    }, 1000);


    this.ela = setInterval(() => {

      datas.push(Math.floor(Math.random() * (130 - 75) + 75));
      let today = new Date();
      date.push(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate())

      // console.log(datas)
      // console.log(date)

      this.chart = new Chart("canvas", {
        type: "line",
        data: {
          labels: date,
          datasets: [
            {
              label: "Heart Rate",
              data: datas,
              borderColor: "#ff0000",
              pointHoverRadius: 10,
              fill: false,
            },
          ],
        },
        options: {
          legend: {
            display: true,
            position: "top",
            labels: {
              fontColor: "rgb(255, 255, 255)",
              // fontSize: 25,
              // padding: 50,
            },
          },
          scales: {
            xAxes: [
              {
                display: true,
                ticks: {
                  fontColor: "white",
                },
              },
            ],
            yAxes: [
              {
                display: true,
                ticks: {
                  fontColor: "white",
                },
              },
            ],
          },
        },
      });

    }, 900000);
  }
  // 
  ngOnDestroy() {
    clearInterval(this.el)
    clearInterval(this.ela)
  }
}
