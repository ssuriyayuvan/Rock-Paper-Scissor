import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameModeComponent } from 'src/components/game-mode/game-mode.component';
import { AppComponent } from './app.component';
import { OnboardComponent } from 'src/components/onboard/onboard.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path:"",
        redirectTo:'',
        pathMatch:'full'
      },
      {
        path:'game-mode',
        component:GameModeComponent
      },
      {
        path:'onboard',
        component:OnboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
