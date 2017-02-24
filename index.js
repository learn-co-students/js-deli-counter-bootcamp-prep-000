var katzDeli = [];

function takeANumber(katzDeliLine, personName) {
  katzDeliLine.push(personName);
return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {

    return "The line is currently empty.";
  }
  else {
    var newArray = [];
    for (var i = 0; i < line.length; i++){
      newArray.push(` ${i + 1}. ${line[i]}`);
    }
  }
return `The line is currently:${newArray}`;
}
