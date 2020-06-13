function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var lineOfPeople = katzDeliLine.length;
  return `Welcome, ${newName}. You are number ` + lineOfPeople + " in line.";
} function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
} function currentLine(katzDeliLine) {
  var currentLine = "The line is currently: ";
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for(let i=0; i<katzDeliLine.length; i+=1) {
      currentLine += `${i+1}. ${katzDeliLine[i]}, `
    }
    return currentLine.slice(0, currentLine.length - 2);
  }
}
