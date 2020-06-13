import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { ControlService } from '../shared/control.service';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.css']
})
export class SleepComponent implements OnInit {

  chart: any = [];

  constructor(private cs: ControlService) { }

  selectedValueDay() {
    let dailyData = this.cs.sleepDataCurrent()[0];
    this.chart = new Chart("canvas", {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Sleep",
            backgroundColor: "#ff0000",
            // borderColor: "white",
            // borderWidth: 1,
            data: [dailyData.sleep],
          },
          {
            label: "Awake",
            backgroundColor: "#fbff00",
            // borderColor: "white",
            // borderWidth: 1,
            data: [dailyData.awake],
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
  }

  selectedValueWeek() {
    let weekData = this.cs.sleepDataWeek();

    // console.log(weekData)

    let tot_date = weekData.map((res) => res.date);
    let tot_sleep = weekData.map((res) => res.sleep);
    let rep_awake = weekData.map((res) => res.awake);

    // console.log(tot_date)
    // console.log(tot_sleep)
    // console.log(rep_awake)

    this.chart = new Chart("canvas", {
      type: "line",
      data: {
        labels: tot_date.reverse(),
        datasets: [
          {
            label: "Sleep",
            data: tot_sleep.reverse(),
            borderColor: "#ff0000",
            pointHoverRadius: 10,
            fill: false,
          },
          {
            label: "Awake",
            data: rep_awake.reverse(),
            borderColor: "#fbff00",
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
  }

  selectedValueMonth() {
    let monthData = this.cs.sleepDataMonth();

    // console.log(monthData)

    let tot_date = monthData.map((res) => {
      let x = res.date.split("/")
      return x[0] + '/' + x[1]
    });
    let tot_sleep = monthData.map((res) => res.sleep);
    let rep_awake = monthData.map((res) => res.awake);

    // console.log(tot_date)
    // console.log(tot_sleep)
    // console.log(rep_awake)

    this.chart = new Chart("canvas", {
      type: "line",
      data: {
        labels: tot_date.reverse(),
        datasets: [
          {
            label: "Sleep",
            data: tot_sleep.reverse(),
            borderColor: "#ff0000",
            pointHoverRadius: 10,
            fill: false,
          },
          {
            label: "Awake",
            data: rep_awake.reverse(),
            borderColor: "#fbff00",
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
  }

  selectedValueYear() {
    let yearData = this.cs.sleepDataYear();

    // console.log(monthData)

    let tot_date = yearData.map((res) => res.date);
    let tot_sleep = yearData.map((res) => res.sleep);
    let rep_awake = yearData.map((res) => res.awake);

    // console.log(tot_date)
    // console.log(tot_sleep)
    // console.log(rep_awake)

    this.chart = new Chart("canvas", {
      type: "line",
      data: {
        labels: tot_date.reverse(),
        datasets: [
          {
            label: "Sleep",
            data: tot_sleep.reverse(),
            borderColor: "#ff0000",
            pointHoverRadius: 10,
            fill: false,
          },
          {
            label: "Awake",
            data: rep_awake.reverse(),
            borderColor: "#fbff00",
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
  }

  ngOnInit() {
  }
}