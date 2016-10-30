import { Component, Input } from '@angular/core';
import { ZoneConf } from './configurations';

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
             `
})
export class ZoneLabelComponent{
  @Input()
  rectconfs: ZoneConf[];
}
