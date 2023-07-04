import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output() currentNumber = new EventEmitter<number>();
  startingNumber: number = 0;
  interval: any;

  startGame(){
    this.interval = setInterval(() => {
      this.currentNumber.emit(this.startingNumber + 1);
      this.startingNumber ++
    }, 1000)
    
  };

  pauseGame(){
    clearInterval(this.interval);
  }
}
