import { Component, OnInit } from '@angular/core';
import { ZoneConf, DonutConf, Configuration } from './configurations';

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App</h1>
	  		<div>
				    <svg attr.width={{conf.width}} attr.height={{conf.height}}
                  [attr.viewBox]="conf.viewbox"
				 	        [style.background-color]="conf.bgcolor">
                  <g donut-chart [conf]="dconf"></g>
                  <g zone-label [rectconfs]="zconf"></g>
				    </svg>
	     	</div>
	    	`
})
export class AppComponent implements OnInit{
  dconf: DonutConf = {
                        x: "50", y: "50", r1: "25", r2: "35",
                        fill: "white", centerfill: "crimson",
                        arclength: 270
                     }
  zconf: ZoneConf[] = [
                        {start: "0", end: "20", x: "100", width: "90", fill: "white"},
                        {start: "21", end: "40", x: "100", width: "90", fill: "white"},
                        {start: "41", end: "60", x: "100", width: "90", fill: "white"},
                        {start: "61", end: "80", x: "100", width: "90", fill: "white"},
                        {start: "81", end: "100", x: "100", width: "90", fill: "white"}
                      ]
  conf: Configuration = {
                          width: "800",
                          height: "410",
                          bgcolor: "crimson",
                          viewbox: "0 0 200 100"
                        }
  ngOnInit(): void{
    //Force the viewbox values
    this.conf.viewbox = "0 0 200 100"
    this.dconf.x = "50"
    this.dconf.y = "50"
  }
}
