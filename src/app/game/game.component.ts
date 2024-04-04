import { Component, OnInit } from '@angular/core';
import * as ex from 'excalibur';

@Component({
  selector: 'app-game',
  template: './banaan.component.html', 
  standalone: true,
})
export class GameComponent implements OnInit { 
    constructor(){

    }
    '<canvas id="game"></canvas>',(){
        var engine = new ex.Engine({
            canvasElementId: "game",
            width: 100,
            height: 100            
        });
        engine.start();
    }    
}