var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  //adds a person to the line in order they come
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length >= 1) {
    let newArray = [...katzDeliLine];
    katzDeliLine.shift();
    return `Currently serving ${newArray[0]}.`;
    //returns an announcement about the person it is serving, and shifts the line
  } else {
    return `There is nobody waiting to be served!`;
    //returns "There is nobody waiting to be served! when no one is on line'
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var number = katzDeliLine.length;
    var newArray = [`The line is currently: 1. ${katzDeliLine[0]}`];
    for(var i=1; i < number; i++){
      newArray.push (` ${i+1}. ${katzDeliLine[i]}`);
    }
    return newArray.toString();
    //says who is in line when there are people waiting
  } else {
    return `The line is currently empty.`;
    //returns "The line is currently empty." if no one is in line
  }
}
