import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnoComponent } from './components/uno/uno.component';
import { ColorDynamicoDirective } from './libs/directivas/color-dynamico.directive';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    ColorDynamicoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
