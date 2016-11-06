import { Component, Input, OnInit } from '@angular/core';
import { ZoneConf, DeltaConf } from './configurations';

@Component({
  selector: '[zone-label]',
  template: `<svg:rect *ngFor="let conf of rectconfs; let i = index"
                        [attr.x]="conf.x" [attr.y]="conf.start"
                        [attr.width]="conf.width"
                        [attr.height]="conf.end - conf.start"
                        [attr.fill]="conf.fill">
             </svg:rect>
             <svg:text *ngFor="let conf of rectconfs"
                        [attr.x]="conf.x + 6"
                        [attr.y]="(conf.start + conf.end)*0.5 + 5" font-family="Verdana"
                        font-size="10" fill="white">
                        {{conf.start}}%-{{conf.end}}%
             </svg:text>
             <svg:g delta-component [conf]="deltaconf"></svg:g>
             `
})
export class ZoneLabelComponent implements OnInit{
  @Input()
  rectconfs: ZoneConf[];

  deltaconf: DeltaConf;

  ngOnInit():void {
    this.deltaconf = {
                      start: 30, end: 50,
                      xpos: this.rectconfs[0].x + this.rectconfs[0].width - 25
                     }
  }
}
