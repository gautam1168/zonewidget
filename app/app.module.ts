import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { DonutComponent } from './app.donutcomponent';
import { ZoneLabelComponent } from './app.zonelabelcomponent';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  DonutComponent,
                  ZoneLabelComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
