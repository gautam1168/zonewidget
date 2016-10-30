import { Component, Input , OnInit} from '@angular/core';
import { DonutConf } from './configurations';
@Component({
  selector: `[donut-chart]`,
  template: `<svg:circle [attr.cx]="conf.x" [attr.cy]="conf.y"
                       [attr.r]="conf.r2" [attr.fill]="conf.fill">
             </svg:circle>
             <svg:circle [attr.cx]="conf.x" [attr.cy]="conf.y"
                       [attr.r]="conf.r1" [attr.fill]="conf.centerfill">
             </svg:circle>
             <svg:path [attr.d]="this.path"
                       style="fill:none; stroke-width: 9; stroke: #dddddd">
             </svg:path>
             `
})
export class DonutComponent implements OnInit{
  @Input()
  conf: DonutConf;

  path: string;

  ngOnInit(): void {
    this.path = "";
    // "'M50 20 A30 30 0 0, 1 80 50'"
    var arctype:number; //0 means the smaller arc and 1 means the bigger one
    if (this.conf.arclength > 180){
      arctype = 1
    }
    else{
      arctype = 0
    }
    this.path += `M50 20 A30 30 0 ${arctype}, 1 `;
    var arcInRads = (this.conf.arclength)*Math.PI/180
    var xcoord: number, ycoord: number;
    xcoord = 50 + 30*Math.sin(arcInRads);
    ycoord = 50 - 30*Math.cos(arcInRads);
    this.path += xcoord.toString() + " " + ycoord.toString();
  }
}
