import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  PopupContainerModule,
  LargeContentModule,
  SmallContentModule,
} from './components';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopupContainerModule,
    LargeContentModule,
    SmallContentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
