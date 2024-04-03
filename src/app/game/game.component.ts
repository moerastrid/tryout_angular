import { Component, OnInit } from '@angular/core';
import * as ex from 'excalibur';

@Component({
  selector: 'app-game',
  template: '<canvas id="game"></canvas>',
  standalone: true,
})
export class GameComponent implements OnInit { 
    constructor(){

    }
    ngOnInit(){
        var engine = new ex.Engine({
            canvasElementId: "game",
            width: 100,
            height: 100            
        });
        engine.start();
    }    

}