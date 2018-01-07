/*

takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."
*/

var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`
  } else {
    var currentlyServing = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${currentlyServing}.`
  }
}

function currentLine(katzDeliLine){
   if (katzDeliLine.length === 0){
    return `The line is currently empty.`
  } else {
      var currentlyServing = "The line is currently: ";
      for (var i = 0; i < katzDeliLine.length; i++){
        if (i === 0){
          currentlyServing += `${i + 1}. ${katzDeliLine[i]}`;
        } else {
          currentlyServing += `, ${i + 1}. ${katzDeliLine[i]}`;  
        }
        
    }
    
    return currentlyServing;
  }
}