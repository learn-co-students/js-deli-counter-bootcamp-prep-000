var KatzDeli = [];
var katzDeliLine = [];
var name;
var newLine = [];

function takeANumber(array, name){
  newLine = array.push(name);
  let tempPlaceInLine = array.indexOf(name);
  let placeInLine = tempPlaceInLine + 1;
  return `Welcome, ${name}. You are number ${placeInLine} in line.`;
}

function nowServing(array, name){
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let serving = array.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(array){
  if (array.length === 0) {
    return "The line is currently empty.";
  } else {
    
    let newArray = [];
    
    for (let i = 0; i < array.length; i++){
      newArray.push(`${i+1}. ${array[i]}`);
    }
    console.log(newArray)
    let theLine = newArray.join(", ");
    console.log(theLine);
    return `The line is currently: ${theLine}`;

  }
}


    
