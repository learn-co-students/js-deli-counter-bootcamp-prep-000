var katzDeliLine = [];
var testArray = [];

function takeANumber(currentLine, newPerson){
  currentLine.push(newPerson);
  
  for(var i = 0; i < currentLine.length; i++){
    if(currentLine[i] === newPerson){
      return `Welcome, ${newPerson}. You are number ${parseInt([i]) +1} in line.`
    }
  }
}

console.log(takeANumber(katzDeliLine, 'Ada'));
console.log(takeANumber(katzDeliLine, 'Grace'));
console.log(takeANumber(katzDeliLine, 'Kent'));

function nowServing(currentLine){
  if (currentLine[0] === undefined){
    return "There is nobody waiting to be served!"
  } else {
    var currentServing = currentLine.splice(0, 1);
    return `Currently serving ${currentServing}.`
  }
}

console.log(nowServing(katzDeliLine));
console.log(nowServing(testArray));

function currentLine(currentLine){
  var stringArray =[];
  
  if(currentLine[0] === undefined){
    return 'The line is currently empty.'
  }
  
  for(var i=0; i < currentLine.length; i++){
    stringArray[i] = ` ${parseInt([i])+1}. ${currentLine[i]}`
  }
  stringArray = stringArray.join();
  return `The line is currently:${stringArray}`
}

console.log(currentLine(katzDeliLine));
console.log(currentLine(testArray));