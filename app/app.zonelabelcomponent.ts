import { Component, Input } from '@angular/core';
import { ZoneConf } from './configurations';

@Component({
  selector: '[zone-label]',
  template: `<svg:rect *ngFor="let conf of rectconfs"
                        [attr.x]="conf.x" [attr.y]="conf.start"
                        [attr.width]="conf.width"
                        [attr.height]="conf.end - conf.start"
                        [attr.fill]="conf.fill">
             </svg:rect>`
})
export class ZoneLabelComponent{
  @Input()
  rectconfs: ZoneConf[];
}
