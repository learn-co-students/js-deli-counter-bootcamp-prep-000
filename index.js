//declare empty array for the deli line
const katzDeliLine = [];

//initialize counter variable
var i = 0;

//declare function for taking a number
//parameters are the currentLine array and the new person who is taking a number
//this will populate the deli line array
function takeANumber(deliLine, newPerson){
  deliLine = deliLine.push(newPerson);
  i++;
  console.log(`Welcome, ${newPerson}. You are number ${i} in line.`)
}

//test cases for populating the deli line array
takeANumber(katzDeliLine, "Carell");
takeANumber(katzDeliLine, "Andrew");
takeANumber(katzDeliLine, "Anya");
takeANumber(katzDeliLine, "Zara");
takeANumber(katzDeliLine, "Kat");

//test to check that the deli line array has been populated
console.log(katzDeliLine);

//declare function which takes the current deli line array as a parameter
//returns the person who is now being served - should be the first element in the array
//removes that element and returns the current deli line array

function nowServing(deliLine) {
	if (deliLine.length === 0){
		console.log(`There is nobody waiting to be served!`);
	}
	else {
		var personServing = deliLine.shift();
		console.log(`Currently serving ${personServing}.`);
		return deliLine;
	}
}

//test cases for removing people from the deli line array
nowServing(katzDeliLine);
nowServing(katzDeliLine);
nowServing(katzDeliLine);
nowServing(katzDeliLine);
nowServing(katzDeliLine);

//test to see that the deli line has the correct number of people after nowServing function was called
console.log(katzDeliLine);

//Build a function currentLine that accepts the current line of people and
//returns the current line as a string; for example, if 'katzDeliLine' is currently
//["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is
//currently: 1. Ada, 2. Grace". You don't have to use katzDeliLine as a variable or
//parameter name in your function though, it's just an example of a variable that might
//be passed to it. If there is nobody in line, it should return "The line is currently empty."

function currentLine(deliLine) {
	if (deliLine.length === 0 ){
		console.log(`The line is currently empty.`);
	}
	else{
		var myLine = `The line is currently: `;
		for (var i = 0; i < deliLine.length; i++) {
			myLine = myLine + `${[i+1]}. ${deliLine[i]} `;
		}
		console.log(myLine);
	}
}

//test to see that the currentLine function works correctly
currentLine(katzDeliLine);
