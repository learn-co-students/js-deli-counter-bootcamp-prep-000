function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  let newPlaceInLine = katzDeliLine.length;
  return `Welcome, ${newName}. You are number ${newPlaceInLine} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  let greeting = "The line is currently: ";
  
  for (let i = 0; i < katzDeliLine.length; i++) {
    let curPerson = katzDeliLine[i];
    let curPlaceInLine = i + 1;
    if (i < katzDeliLine.length - 1) {
      greeting += `${curPlaceInLine}. ${curPerson}, `
    }  else {
      greeting += `${curPlaceInLine}. ${curPerson}`
    }
  }
  return greeting;
}