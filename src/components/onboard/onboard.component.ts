import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent implements OnInit {

  cpu:any;
  rps:any;
  res:any;
  disp_res:any;
  constructor() { }

  ngOnInit() {
    this.rps = [{val:1,name:'rock'},{val:2,name:'paper'},{val:3,name:'scissor'}]
    this.cpu = Math.floor((Math.random() * 3) );
    this.res = this.rps[this.cpu].name
  }

  reset(){
    this.ngOnInit();
  }

  userClick(val){
    this.cpu = Math.floor((Math.random() * 3) );
    this.res = this.rps[this.cpu].name
    console.log(val,this.cpu)
    if(val == 0){
      if(val == 0 && this.cpu == 1){
        this.disp_res = 'Computer Win'
      }else if(val == 0 && this.cpu == 0){
        this.disp_res = 'Match Draw'
      }else if(val == 0 && this.cpu == 2){
        this.disp_res = 'Player Win';
      }
    }else if(val == 1){
      if(val == 1 && this.cpu == 1){
        this.disp_res = 'Match Draw'
      }else if(val == 1 && this.cpu == 0){
        this.disp_res = 'Player Win'
      }else if(val == 1 && this.cpu == 2){
        this.disp_res = 'Computer Win';
      }
    }else if(val == 2){
      if(val == 2 && this.cpu == 1){
        this.disp_res = 'Player Win'
      }else if(val == 2 && this.cpu == 0){
        this.disp_res = 'Computer Win'
      }else if(val == 2 && this.cpu == 2){
        this.disp_res = 'Match Draw';
      }
    }
    console.log(this.disp_res)
  }

}
