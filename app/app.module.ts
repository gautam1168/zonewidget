import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { DonutComponent } from './app.donutcomponent';
import { ZoneLabelComponent } from './app.zonelabelcomponent';
import { DeltaComponent } from './app.deltacomponent';
import { FormsModule } from '@angular/forms';
import { WidgetControls } from './app.widgetcontrols';
@NgModule({
  imports:      [ BrowserModule,
                  FormsModule
                ],
  declarations: [ AppComponent,
                  DonutComponent,
                  ZoneLabelComponent,
                  DeltaComponent,
                  WidgetControls
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
