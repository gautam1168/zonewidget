import { Component } from '@angular/core';

export class DrawAreaState {
  uuidseed: number;
  height: number;
  width: number;
  resolution: number[];
  widgets: number[][][];
}

export class Coords {
  x: number;
  y: number;
}

export class Position {
  top: number;
  left: number;
  width: number;
  height: number;
}

@Component({
  selector: 'my-app',
  template: `<h1>Div Drawer</h1>
            <div class="drawarea" [style.height]="dstate.height"
                 [style.width]="dstate.width"
                 (click)="logMouseCoords($event)">
                 <div *ngFor="let widget of getWidgets()" [style.position]="absolute"
                  [style.top]="widget.top" [style.left]="widget.left"
                  [style.width]="widget.width" [style.height]="widget.height"
                  class="widgetblock"></div>
            </div>
            `,
  styles: [`
            .drawarea{
                border: solid 2px #ccc;
            }
            .widgetblock{
                border: solid 1px red;
            }
          `]
})
export class AppComponent{
  dstate : DrawAreaState = {
    uuidseed: 0,
    height: 500, width: 1370,
    resolution: [3, 3],
    widgets: [
              [[0],[0],[0]],
              [[0],[0],[0]],
              [[0],[0],[0]]
             ]
  }

  uuid(): number{
    this.dstate.uuidseed += 1;
    return this.dstate.uuidseed;
  }

  logMouseCoords(evt): void{
    var cellIndices: Coords = this.mapCoordToCell(evt.offsetX, evt.offsetY)
    this.insertWidget(cellIndices, this.uuid())
    console.log(this.dstate.widgets)
    console.log(this.cellPosition(cellIndices))
  }

  mapCoordToCell(xcoord: number, ycoord: number): Coords{
    var cellIndices: Coords = {x: 0, y: 0};
    cellIndices.x = Math.floor(xcoord/(this.dstate.width/this.dstate.resolution[0]));
    cellIndices.y = Math.floor(ycoord/(this.dstate.height/this.dstate.resolution[1]));
    return cellIndices;
  }

  insertWidget(cellIndices: Coords, widgetIndex: number, widgetLevel: number = 0): void{
    this.dstate.widgets[cellIndices.y][cellIndices.x][widgetLevel] = widgetIndex
  }

  cellPosition(cellIndices: Coords): Position{
    var cellpos = new Position();
    cellpos.width = this.dstate.width/this.dstate.resolution[0];
    cellpos.height = this.dstate.height/this.dstate.resolution[1];
    cellpos.top = cellIndices.y*cellpos.height;
    cellpos.left = cellIndices.x*cellpos.width;
    return cellpos;
  }

  getWidgets(): Position[]{
    var widgets: Position[] = [];
    var widindex = 0;
    for (var i = 0; i < this.dstate.resolution[1]; i++){
      for (var j = 0; j < this.dstate.resolution[0]; j++){
        if (this.dstate.widgets[i][j][0] > 0){
          widgets[widindex] = this.cellPosition({x: j, y: i});
        }
        widindex += 1;
      }
    }
    console.log(widgets)
    return widgets;
  }
}
