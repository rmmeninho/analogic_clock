import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analog-clock-v2',
  templateUrl: './analog-clock-v2.component.html',
  styleUrls: ['./analog-clock-v2.component.css']
})
export class AnalogClockV2Component implements OnInit {

  hora: any;
  minuto: any;
  segundo: any;

  constructor() { }

  ngOnInit(): void {

    this.clock();

  }

  clock = () => {

    const date = new Date();
    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    this.hora = 'rotate('+hour+'deg)';
    this.minuto = 'rotate('+minute+'deg)';
    this.segundo = 'rotate('+second+'deg)';

    setInterval(()=>{
      this.clock();
    },1000);

  }
}
