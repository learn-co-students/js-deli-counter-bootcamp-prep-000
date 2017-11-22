var katzDeliLine = [];

function takeANumber(katzDeliLine, person){
  var newPerson = katzDeliLine.push(person);
  for (var i = 0; i < katzDeliLine.length; i++){
    return (`Welcome, ${person}. You are number ${newPerson} in line.`);
  }
  return newPerson;
}

function nowServing(katzDeliLine){
  var serving = katzDeliLine.shift();
  for(var i = 0; i < katzDeliLine.length; i++){
    return (`Currently serving ${serving}.`);
    return katzDeliLine;
  }
  return(`There is nobody waiting to be served!`);
}

function currentLine(line){
  var newArr = [];
  if(line.length === 0){
    return ("The line is currently empty.");
  } else {
  for(var i = 0; i < line.length; i++){
    newArr.push(`${i + 1}. ${line[i]}`);
  }
  return `The line is currently: ${newArr.join(', ')}`
  }
}
