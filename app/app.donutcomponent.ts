import { Component, Input , OnInit, trigger, state, style,
         transition, animate} from '@angular/core';
import { DonutConf } from './configurations';
@Component({
  selector: `[donut-chart]`,
  template: `<svg:circle [attr.cx]="conf.x" [attr.cy]="conf.y"
                       [attr.r]="conf.r2" [attr.fill]="conf.fill">
             </svg:circle>
             <svg:circle [attr.cx]="conf.x" [attr.cy]="conf.y"
                       [attr.r]="conf.r1" [attr.fill]="conf.centerfill">
             </svg:circle>
             <svg:path [attr.d]="calcPath()" stroke-linecap="round"
                       style="fill:none; stroke-width: 9"
                       [style.stroke]="conf.strokecolor">
             </svg:path>
             <svg:text [attr.x]="textXcoord"
                       [attr.y]="textYcoord" font-family="Verdana"
                        font-size="15" fill="white">
                        {{floor(conf.arclength/3.6)}}%
             </svg:text>
             `,
  animations: [
    trigger('onload', [
      state('void', style({fill: "black"})),
      state('*', style({fill: "red"})),
      transition('void => *', animate('100ms ease-in'))
    ])
  ]
})
export class DonutComponent implements OnInit{
  @Input()
  conf: DonutConf;

  floor = Math.floor;

  path: string;
  textXcoord: number;
  textYcoord: number;

  calcPath(): string {
    //Calculate the path for filling circle
    var path = "";
    // "'M50 20 A30 30 0 0, 1 80 50'"
    var arctype:number; //0 means the smaller arc and 1 means the bigger one
    if (this.conf.arclength > 180){
      arctype = 1
    }
    else{
      arctype = 0
    }
    path += `M50 20 A30 30 0 ${arctype}, 1 `;
    var arcInRads = (this.conf.arclength)*Math.PI/180
    var xcoord: number, ycoord: number;
    xcoord = 50 + 30*Math.sin(arcInRads);
    ycoord = 50 - 30*Math.cos(arcInRads);
    path += xcoord.toString() + " " + ycoord.toString();
    return path;
  }

  ngOnInit(): void {
    
    //Calculate text position
    this.textXcoord = parseInt(this.conf.x) - 0.6*parseInt(this.conf.r1)
    this.textYcoord = parseInt(this.conf.y) + 0.2*parseInt(this.conf.r1)
  }
}
