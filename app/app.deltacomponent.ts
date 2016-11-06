import { Component, Input } from '@angular/core';
import { DeltaConf } from './configurations';

@Component({
  selector: '[delta-component]',
  template: `<svg:defs>
                <svg:marker id="Triangle" viewBox="0 0 10 10" refX="1" refY="5"
                    markerWidth="6" markerHeight="6" orient="auto" fill="white">
                    <path d="M 0 0 L 10 5 L 0 10 z" />
                </svg:marker>
             </svg:defs>
             <svg:line [attr.x1]="conf.xpos+5" [attr.y1]="conf.start"
                       [attr.x2]="conf.xpos+5" [attr.y2]="conf.end-3"
                       style="stroke-width: 0.5; stroke: white"
                       marker-end="url(#Triangle)"
                       ></svg:line>
             <svg:text [attr.x]="conf.xpos+7"
                       [attr.y]="(conf.start + conf.end)*0.5 + 1" font-family="Verdana"
                       font-size="5" fill="white">
                       {{conf.start - conf.end}}%
            </svg:text>
            `
})
export class DeltaComponent{
  @Input()
  conf: DeltaConf;
}
