import { Component, Input } from '@angular/core';
import { DonutConf } from './configurations';
@Component({
  selector: 'widget-controls',
  template: `<div class="inputcontainer">
                <label for="arc">Arc</label>
                <input type="text" class="form-control" id="arc"
                      [(ngModel)]="conf.arclength" name="arclength">
             </div>
             <div class="inputcontainer">
                <label for="arc">Start</label>
                <input type="text" class="form-control" id="arc">
             </div>
             <div class="inputcontainer">
                <label for="arc">End</label>
                <input type="text" class="form-control" id="arc">
             </div>`,
    styles: [`.inputcontainer{padding: 10px}`]
})
export class WidgetControls {
  @Input()
  conf: DonutConf;
}
