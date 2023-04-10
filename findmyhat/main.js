
const prompt = require('prompt-sync')({ sigint: true });
const clear = require('clear-screen');


const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const row = 10;
const col = 10;
let getWord = "";

const field = [[]];
const upControls = ["U"];
const downControls = ["D"];
const leftControls = ["L"];
const rightControls = ["R"];
/*const outOfBounds = "Out of bounds- Game End!";
const getHat = "Congrats! You found your hat.";
const dropHole = "Sorry, you fell down a hole.";*/

const xstart = 0;
const ystart = 0;

let xPosition = 0;
let yPosition = 0;

function generateField(){

let row = 10;
let col = 10;
const array_name = []; 

print()    
}

generateField(); 

field.map(row => {return row.join('');}).join('\n');
    //This is what the map function is doing
    for(let i = 0 ; i < field.length; i ++){
        let row = field[i];
        row.join("");
    }


const hatLocation = {
    x: Math.floor(Math.random() * col),
    y: Math.floor(Math.random() * row)
}

const holesLocation = {
    x: Math.floor(Math.random() * col),
    y: Math.floor(Math.random() * row)
}

function isValidInput(userInput) {
    let validInput = ['U','D','L','R'];
      if ( validInput.indexOf(userInput) !== -1 ) {
        return true;
      } else {
        console.log('Please enter U, D, L, R');
        return false;
      }
    }



    
