function takeANumber(people, person) {
  people.push(person);
  
  return `Welcome, ${person}. You are number ${people.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  let currLine = "The line is currently:";
  
  if (katzDeliLine.length === 0) {
    currLine ="The line is currently empty."
  }
  else {
    let i = 0;
    do {
      currLine += ` ${i + 1}. ${katzDeliLine[i]}`;
      if (i < (katzDeliLine.length - 1)) {
        currLine += ",";
      }
      
      i++;
    } while (i < katzDeliLine.length);
  }
  
  return currLine;
}