import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor() { }

  data_sleep = [
    {
      date: "1/1/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "2/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "3/1/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "4/1/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "5/1/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "6/1/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "7/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "8/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "9/1/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "10/1/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "11/1/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "12/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "13/1/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "14/1/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "15/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "16/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "17/1/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "18/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "19/1/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "20/1/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "21/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "22/1/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "23/1/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "24/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "25/1/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "26/1/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "27/1/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "28/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "29/1/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "30/1/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "31/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "1/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "2/2/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "3/2/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "4/2/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "5/2/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "6/2/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "7/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "8/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "9/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "10/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "11/2/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "12/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "13/2/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "14/2/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "15/2/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "16/2/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "17/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "18/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "19/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "20/2/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "21/2/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "22/2/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "23/2/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "24/2/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "25/2/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "26/2/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "27/2/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "28/2/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "1/3/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "2/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "3/3/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "4/3/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "5/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "6/3/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "7/3/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "8/3/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "9/3/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "10/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "11/3/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "12/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "13/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "14/3/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "15/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "16/3/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "17/3/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "18/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "19/3/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "20/3/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "21/3/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "22/3/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "23/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "24/3/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "25/3/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "26/3/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "27/3/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "28/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "29/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "30/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "31/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "1/4/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "2/4/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "3/4/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "4/4/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "5/4/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "6/4/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "7/4/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "8/4/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "9/4/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "10/4/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "11/4/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "12/4/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "13/4/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "14/4/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "15/4/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "16/4/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "17/4/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "18/4/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "19/4/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "20/4/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "21/4/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "22/4/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "23/4/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "24/4/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "25/4/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "26/4/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "27/4/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "28/4/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "29/4/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "30/4/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "1/5/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "2/5/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "3/5/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "4/5/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "5/5/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "6/5/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "7/5/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "8/5/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "9/5/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "10/5/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "11/5/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "12/5/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "13/5/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "14/5/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "15/5/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "16/5/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "17/5/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "18/5/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "19/5/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "20/5/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "21/5/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "22/5/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "23/5/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "24/5/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "25/5/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "26/5/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "27/5/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "28/5/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "29/5/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "30/5/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "31/5/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "1/6/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "2/6/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "3/6/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "4/6/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "5/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "6/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "7/6/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "8/6/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "9/6/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "10/6/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "11/6/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "12/6/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "13/6/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "14/6/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "15/6/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "16/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "17/6/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "18/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "19/6/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "20/6/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "21/6/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "22/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "23/6/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "24/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "25/6/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "26/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "27/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "28/6/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "29/6/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "30/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "1/7/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "2/7/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "3/7/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "4/7/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "5/7/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "6/7/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "7/7/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "8/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "9/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "10/7/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "11/7/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "12/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "13/7/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "14/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "15/7/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "16/7/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "17/7/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "18/7/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "19/7/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "20/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "21/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "22/7/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "23/7/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "24/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "25/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "26/7/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "27/7/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "28/7/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "29/7/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "30/7/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "31/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "1/8/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "2/8/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "3/8/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "4/8/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "5/8/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "6/8/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "7/8/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "8/8/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "9/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "10/8/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "11/8/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "12/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "13/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "14/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "15/8/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "16/8/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "17/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "18/8/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "19/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "20/8/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "21/8/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "22/8/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "23/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "24/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "25/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "26/8/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "27/8/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "28/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "29/8/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "30/8/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "31/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "1/9/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "2/9/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "3/9/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "4/9/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "5/9/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "6/9/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "7/9/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "8/9/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "9/9/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "10/9/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "11/9/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "12/9/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "13/9/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "14/9/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "15/9/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "16/9/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "17/9/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "18/9/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "19/9/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "20/9/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "21/9/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "22/9/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "23/9/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "24/9/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "25/9/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "26/9/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "27/9/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "28/9/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "29/9/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "30/9/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "1/10/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "2/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "3/10/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "4/10/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "5/10/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "6/10/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "7/10/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "8/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "9/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "10/10/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "11/10/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "12/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "13/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "14/10/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "15/10/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "16/10/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "17/10/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "18/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "19/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "20/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "21/10/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "22/10/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "23/10/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "24/10/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "25/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "26/10/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "27/10/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "28/10/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "29/10/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "30/10/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "31/10/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "1/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "2/11/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "3/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "4/11/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "5/11/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "6/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "7/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "8/11/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "9/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "10/11/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "11/11/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "12/11/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "13/11/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "14/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "15/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "16/11/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "17/11/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "18/11/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "19/11/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "20/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "21/11/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "22/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "23/11/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "24/11/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "25/11/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "26/11/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "27/11/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "28/11/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "29/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "30/11/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "1/12/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "2/12/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "3/12/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "4/12/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "5/12/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "6/12/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "7/12/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "8/12/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "9/12/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "10/12/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "11/12/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "12/12/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "13/12/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "14/12/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "15/12/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "16/12/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "17/12/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "18/12/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "19/12/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "20/12/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "21/12/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "22/12/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "23/12/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "24/12/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "25/12/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "26/12/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "27/12/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "28/12/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "29/12/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "30/12/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "31/12/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "1/1/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "2/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "3/1/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "4/1/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "5/1/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "6/1/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "7/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "8/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "9/1/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "10/1/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "11/1/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "12/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "13/1/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "14/1/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "15/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "16/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "17/1/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "18/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "19/1/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "20/1/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "21/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "22/1/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "23/1/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "24/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "25/1/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "26/1/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "27/1/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "28/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "29/1/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "30/1/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "31/1/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "1/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "2/2/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "3/2/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "4/2/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "5/2/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "6/2/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "7/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "8/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "9/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "10/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "11/2/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "12/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "13/2/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "14/2/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "15/2/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "16/2/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "17/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "18/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "19/2/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "20/2/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "21/2/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "22/2/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "23/2/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "24/2/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "25/2/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "26/2/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "27/2/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "28/2/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "1/3/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "2/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "3/3/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "4/3/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "5/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "6/3/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "7/3/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "8/3/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "9/3/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "10/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "11/3/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "12/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "13/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "14/3/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "15/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "16/3/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "17/3/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "18/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "19/3/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "20/3/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "21/3/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "22/3/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "23/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "24/3/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "25/3/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "26/3/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "27/3/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "28/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "29/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "30/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "31/3/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "1/4/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "2/4/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "3/4/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "4/4/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "5/4/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "6/4/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "7/4/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "8/4/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "9/4/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "10/4/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "11/4/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "12/4/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "13/4/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "14/4/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "15/4/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "16/4/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "17/4/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "18/4/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "19/4/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "20/4/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "21/4/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "22/4/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "23/4/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "24/4/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "25/4/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "26/4/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "27/4/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "28/4/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "29/4/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "30/4/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "1/5/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "2/5/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "3/5/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "4/5/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "5/5/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "6/5/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "7/5/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "8/5/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "9/5/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "10/5/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "11/5/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "12/5/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "13/5/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "14/5/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "15/5/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "16/5/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "17/5/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "18/5/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "19/5/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "20/5/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "21/5/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "22/5/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "23/5/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "24/5/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "25/5/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "26/5/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "27/5/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "28/5/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "29/5/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "30/5/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "31/5/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "1/6/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "2/6/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "3/6/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "4/6/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "5/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "6/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "7/6/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "8/6/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "9/6/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "10/6/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "11/6/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "12/6/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "13/6/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "14/6/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "15/6/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "16/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "17/6/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "18/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "19/6/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "20/6/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "21/6/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "22/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "23/6/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "24/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "25/6/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "26/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "27/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "28/6/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "29/6/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "30/6/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "1/7/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "2/7/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "3/7/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "4/7/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "5/7/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "6/7/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "7/7/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "8/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "9/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "10/7/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "11/7/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "12/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "13/7/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "14/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "15/7/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "16/7/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "17/7/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "18/7/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "19/7/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "20/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "21/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "22/7/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "23/7/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "24/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "25/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "26/7/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "27/7/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "28/7/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "29/7/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "30/7/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "31/7/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "1/8/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "2/8/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "3/8/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "4/8/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "5/8/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "6/8/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "7/8/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "8/8/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "9/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "10/8/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "11/8/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "12/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "13/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "14/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "15/8/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "16/8/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "17/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "18/8/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "19/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "20/8/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "21/8/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "22/8/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "23/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "24/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "25/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "26/8/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "27/8/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "28/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "29/8/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "30/8/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "31/8/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "1/9/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "2/9/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "3/9/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "4/9/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "5/9/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "6/9/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "7/9/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "8/9/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "9/9/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "10/9/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "11/9/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "12/9/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "13/9/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "14/9/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "15/9/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "16/9/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "17/9/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "18/9/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "19/9/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "20/9/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "21/9/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "22/9/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "23/9/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "24/9/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "25/9/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "26/9/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "27/9/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "28/9/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "29/9/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "30/9/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "1/10/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "2/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "3/10/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "4/10/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "5/10/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "6/10/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "7/10/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "8/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "9/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "10/10/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "11/10/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "12/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "13/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "14/10/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "15/10/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "16/10/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "17/10/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "18/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "19/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "20/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "21/10/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "22/10/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "23/10/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "24/10/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "25/10/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "26/10/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "27/10/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "28/10/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "29/10/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "30/10/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "31/10/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "1/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "2/11/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "3/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "4/11/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "5/11/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "6/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "7/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "8/11/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "9/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "10/11/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "11/11/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "12/11/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "13/11/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "14/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "15/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "16/11/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "17/11/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "18/11/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "19/11/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "20/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "21/11/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "22/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "23/11/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "24/11/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "25/11/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "26/11/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "27/11/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "28/11/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "29/11/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "30/11/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "1/12/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "2/12/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "3/12/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "4/12/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "5/12/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "6/12/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "7/12/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "8/12/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "9/12/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "10/12/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "11/12/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "12/12/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "13/12/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "14/12/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "15/12/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "16/12/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "17/12/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "18/12/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "19/12/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "20/12/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "21/12/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "22/12/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "23/12/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "24/12/2018",
      sleep: 540,
      awake: 900,
    },
    {
      date: "25/12/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "26/12/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "27/12/2018",
      sleep: 480,
      awake: 960,
    },
    {
      date: "28/12/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "29/12/2018",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "30/12/2018",
      sleep: 600,
      awake: 840,
    },
    {
      date: "31/12/2018",
      sleep: 660,
      awake: 780,
    },
    {
      date: "1/1/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "2/1/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "3/1/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "4/1/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "5/1/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "6/1/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "7/1/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "8/1/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "9/1/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "10/1/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "11/1/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "12/1/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "13/1/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "14/1/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "15/1/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "16/1/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "17/1/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "18/1/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "19/1/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "20/1/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "21/1/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "22/1/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "23/1/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "24/1/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "25/1/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "26/1/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "27/1/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "28/1/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "29/1/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "30/1/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "31/1/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "1/2/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "2/2/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "3/2/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "4/2/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "5/2/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "6/2/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "7/2/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "8/2/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "9/2/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "10/2/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "11/2/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "12/2/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "13/2/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "14/2/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "15/2/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "16/2/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "17/2/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "18/2/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "19/2/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "20/2/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "21/2/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "22/2/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "23/2/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "24/2/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "25/2/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "26/2/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "27/2/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "28/2/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "1/3/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "2/3/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "3/3/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "4/3/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "5/3/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "6/3/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "7/3/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "8/3/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "9/3/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "10/3/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "11/3/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "12/3/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "13/3/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "14/3/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "15/3/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "16/3/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "17/3/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "18/3/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "19/3/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "20/3/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "21/3/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "22/3/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "23/3/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "24/3/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "25/3/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "26/3/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "27/3/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "28/3/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "29/3/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "30/3/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "31/3/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "1/4/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "2/4/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "3/4/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "4/4/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "5/4/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "6/4/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "7/4/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "8/4/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "9/4/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "10/4/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "11/4/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "12/4/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "13/4/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "14/4/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "15/4/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "16/4/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "17/4/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "18/4/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "19/4/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "20/4/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "21/4/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "22/4/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "23/4/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "24/4/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "25/4/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "26/4/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "27/4/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "28/4/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "29/4/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "30/4/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "1/5/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "2/5/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "3/5/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "4/5/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "5/5/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "6/5/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "7/5/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "8/5/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "9/5/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "10/5/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "11/5/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "12/5/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "13/5/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "14/5/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "15/5/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "16/5/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "17/5/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "18/5/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "19/5/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "20/5/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "21/5/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "22/5/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "23/5/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "24/5/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "25/5/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "26/5/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "27/5/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "28/5/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "29/5/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "30/5/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "31/5/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "1/6/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "2/6/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "3/6/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "4/6/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "5/6/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "6/6/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "7/6/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "8/6/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "9/6/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "10/6/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "11/6/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "12/6/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "13/6/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "14/6/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "15/6/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "16/6/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "17/6/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "18/6/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "19/6/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "20/6/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "21/6/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "22/6/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "23/6/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "24/6/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "25/6/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "26/6/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "27/6/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "28/6/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "29/6/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "30/6/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "1/7/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "2/7/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "3/7/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "4/7/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "5/7/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "6/7/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "7/7/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "8/7/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "9/7/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "10/7/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "11/7/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "12/7/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "13/7/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "14/7/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "15/7/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "16/7/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "17/7/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "18/7/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "19/7/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "20/7/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "21/7/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "22/7/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "23/7/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "24/7/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "25/7/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "26/7/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "27/7/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "28/7/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "29/7/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "30/7/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "31/7/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "1/8/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "2/8/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "3/8/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "4/8/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "5/8/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "6/8/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "7/8/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "8/8/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "9/8/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "10/8/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "11/8/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "12/8/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "13/8/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "14/8/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "15/8/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "16/8/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "17/8/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "18/8/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "19/8/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "20/8/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "21/8/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "22/8/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "23/8/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "24/8/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "25/8/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "26/8/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "27/8/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "28/8/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "29/8/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "30/8/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "31/8/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "1/9/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "2/9/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "3/9/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "4/9/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "5/9/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "6/9/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "7/9/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "8/9/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "9/9/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "10/9/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "11/9/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "12/9/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "13/9/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "14/9/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "15/9/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "16/9/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "17/9/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "18/9/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "19/9/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "20/9/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "21/9/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "22/9/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "23/9/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "24/9/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "25/9/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "26/9/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "27/9/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "28/9/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "29/9/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "30/9/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "1/10/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "2/10/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "3/10/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "4/10/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "5/10/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "6/10/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "7/10/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "8/10/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "9/10/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "10/10/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "11/10/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "12/10/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "13/10/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "14/10/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "15/10/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "16/10/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "17/10/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "18/10/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "19/10/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "20/10/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "21/10/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "22/10/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "23/10/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "24/10/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "25/10/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "26/10/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "27/10/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "28/10/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "29/10/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "30/10/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "31/10/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "1/11/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "2/11/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "3/11/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "4/11/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "5/11/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "6/11/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "7/11/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "8/11/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "9/11/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "10/11/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "11/11/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "12/11/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "13/11/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "14/11/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "15/11/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "16/11/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "17/11/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "18/11/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "19/11/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "20/11/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "21/11/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "22/11/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "23/11/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "24/11/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "25/11/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "26/11/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "27/11/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "28/11/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "29/11/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "30/11/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "1/12/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "2/12/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "3/12/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "4/12/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "5/12/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "6/12/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "7/12/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "8/12/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "9/12/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "10/12/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "11/12/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "12/12/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "13/12/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "14/12/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "15/12/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "16/12/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "17/12/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "18/12/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "19/12/2019",
      sleep: 420,
      awake: 1020,
    },
    {
      date: "20/12/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "21/12/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "22/12/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "23/12/2019",
      sleep: 660,
      awake: 780,
    },
    {
      date: "24/12/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "25/12/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "26/12/2019",
      sleep: 600,
      awake: 840,
    },
    {
      date: "27/12/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "28/12/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "29/12/2019",
      sleep: 480,
      awake: 960,
    },
    {
      date: "30/12/2019",
      sleep: 540,
      awake: 900,
    },
    {
      date: "31/12/2019",
      sleep: 420,
      awake: 1020,
    },
  ]

  sleepDataCurrent() {
    return this.data_sleep.filter(day => {
      return day.date === "31/12/2019"
    });
  }

  sleepDataWeek() {
    let data = []
    let arr_len = this.data_sleep.length
    let x = 0
    while (arr_len) {
      data.push(this.data_sleep[arr_len - 1])
      arr_len -= 1
      x += 1
      if (x === 7)
        break
    }
    return data
  }

  sleepDataMonth() {
    let data = []
    let arr_len = this.data_sleep.length
    let x = 0
    while (arr_len) {
      data.push(this.data_sleep[arr_len - 1])
      arr_len -= 1
      x += 1
      if (x === 30)
        break
    }
    return data
  }

  sleepDataYear() {
    let data = []
    let arr_len = this.data_sleep.length
    let x = 0
    while (arr_len) {
      data.push(this.data_sleep[arr_len - 1])
      arr_len -= 1
      x += 1
      if (x === 365)
        break
    }
    return data
  }
}
