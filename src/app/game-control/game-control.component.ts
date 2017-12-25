import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

    @Output() numberEmited = new EventEmitter<number>();
    interval;
    lastNumber = 0;
    
    constructor() { }
    
    ngOnInit() {
    }
    
    timerId;
    
    start() {
        this.timerId = setInterval(function() {
            this.interval.emit(this.lastNumber + 1);
            this.lastNumber++;
        }, 1000);
    }
  
    stop() {
        clearInterval(this.timerId);
        this.interval = 1;
    }
}