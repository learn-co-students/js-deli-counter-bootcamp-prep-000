var katzDeliLine = [];
var otherDeli = ['Ava', 'Kim', 'Ashley'];

function takeANumber(line, name){
  let numberInLine;
	for (var i = 0 ; i <= line.length; i++){
		line.push(name);
    numberInLine = line.length;
    return `Welcome, ${name}. You are number ${numberInLine} in line.`;
	  
	}
}

function nowServing(line){
  if (line.length === 0){
    return `There is nobody waiting to be served!`
  }
  return `Currently serving ${line.shift(line[0])}.`;

}

function currentLine(line){
  let newArray = [];
  let names;
  let numbers;
  if (line.length === 0){
    return `The line is currently empty.`
  }
  else {
    for (let i = 0; i < line.length; i++){
    names = line[i];
    numbers = i+1;
    newArray.push(` ${numbers}. ${names}`)
  } 
  }
  return `The line is currently:${newArray}`;
}