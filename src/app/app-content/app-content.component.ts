import { Component, OnInit } from '@angular/core';
import { Dice } from "../dice"; 

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.css']
})
export class AppContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  roll(){
    var diceValue;
    diceValue = Math.floor((Math.random()*(7 - 1)) + 1);

    switch(diceValue)
    { //this will change the image that is persented to the user based on what they roll
    case 1:
      this.DieValue = {imgSrc: "assets/images/DiceOne.png"}; 
      break;
      case 2:
      this.DieValue = {imgSrc: "assets/images/DiceTwo.png"}; 
      break;
      case 3:
      this.DieValue = {imgSrc: "assets/images/DiceThree.png"}; 
      break;
      case 4:
      this.DieValue = {imgSrc: "assets/images/DiceFour.png"}; 
      break;
      case 5:
      this.DieValue = {imgSrc: "assets/images/DiceFive.png"}; 
      break;
      case 6:
      this.DieValue = {imgSrc: "assets/images/DiceSix.png"}; 
      break;
    }
    console.log(diceValue); 
  }

  DieValue:Dice =
   {imgSrc: "assets/images/DiceTwo.png" 
  }; 
}
