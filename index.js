function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  var currentlyServing = katzDeliLine.shift();
  return `Currently serving ${currentlyServing}.`;
}


function currentLine(katzDeliLine) {
  var people = [];
  
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  for (let i = 0; i < katzDeliLine.length; i++) {
   people.push(` ${i+1}. ${katzDeliLine[i]}`);
  }  
  
  people.join(',');
  return `The line is currently:${people}`;
}