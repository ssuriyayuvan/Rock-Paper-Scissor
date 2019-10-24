import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModeComponent } from 'src/components/game-mode/game-mode.component';
import { OnboardComponent } from 'src/components/onboard/onboard.component';

@NgModule({
  declarations: [
    AppComponent,GameModeComponent,OnboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
