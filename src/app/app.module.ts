import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ZooComponent } from './zoo/zoo.component';
import { zooReducer } from './state/zoo.reducer';

@NgModule({
  declarations: [AppComponent, ZooComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ zoo: zooReducer }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
