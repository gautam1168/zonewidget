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
             <svg:path [attr.d]="path" stroke-linecap="round"
                       style="fill:none; stroke-width: 9"
                       [style.stroke]="conf.strokecolor">
             </svg:path>
             <svg:text [attr.x]="textXcoord"
                       [attr.y]="textYcoord" font-family="Verdana"
                        font-size="15" fill="white">
                        {{floor(conf.arclength/3.6)}}%
             </svg:text>
             `
})
export class DonutComponent implements OnInit{
  @Input()
  conf: DonutConf;

  floor = Math.floor;

  path: string;
  textXcoord: number;
  textYcoord: number;

  ngOnInit(): void {
    //Calculate the path for filling circle
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

    //Calculate text position
    this.textXcoord = parseInt(this.conf.x) - 0.6*parseInt(this.conf.r1)
    this.textYcoord = parseInt(this.conf.y) + 0.2*parseInt(this.conf.r1)
  }
}
