"use strict";

const { count } = require('console');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

let insertedColor = () => { 
 
    readline.question(`Enter your input, Player 1`, function (playerOneInput) {
        
		console.log(`Hi, you entered: ${playerOneInput}`)
		//storePlayerOne(playerOneInput);
		
		//counter;
		//const result= player2(); counter++;
		// console.log(result)
		//if(counter < 10){
		 // player2()
	   // }
		let counter = 0;
		function player2(){
			counter++;
			  readline.question(`Now, Player2, provide your input: `, function (playerTwoInput){
				  const result = evaluate(playerTwoInput);
				  console.log(result);
				  if(counter < 10 && !evaluate(playerOneInput, playerTwoInput)){
						player2();
				  }  else {
					console.log('You Win!!');
				  }
		
		})
		}
		

		

	
	
	
	//readline.close()
  })
  

}

let color =  insertedColor();


function evaluate (playerOneInput, playerTwoInput){
	//to array
	let input1 = playerOneInput.split('');
	let input2 = playerTwoInput.split('');

	// check for white'
	let counter = 0;
	for (let i = 0; i < input1.length; i++) {
		for (let j = 0; j < input2.length; j++) {
			if (input1[i] === input2[j]) {
				input1[i] == null;
				counter++;
				break;
			}
		}
	}
	const white = counter === 4;
	

	if (playerOneInput) {
		return true
	} else {
		return false;
	}
//won = true;
//return "WON!";
//string
/* let stringInput = userInput.split(userInput); */


// check for black
//return string ""
}

/*function storePlayerOne(userInput){
playerOne = userInput;
}*/
