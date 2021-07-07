var cristinasDeli = [];

function takeANumber(cristinasDeliLine, newPerson) {
  cristinasDeliLine.push(newPerson);
  var positionInLine = cristinasDeliLine.length;
  return `Welcome, ${newPerson}. You are number ${positionInLine} in line.`;
}

function nowServing(cristinasDeliLine) {
  while (cristinasDeliLine.length > 0) {
    var firstPerson = cristinasDeliLine[0];
    cristinasDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  }
  return "There is nobody waiting to be served!";
}

function currentLine(cristinasDeliLine) {
  var line = [];
  var counter = 0;
  while (counter < cristinasDeliLine.length) {
    line.push(` ${counter + 1}. ${cristinasDeliLine[counter]}`);
    counter++;
  }
  cristinasDeliLine.shift();
  if(cristinasDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    return `The line is currently:${line}`;
  }
}



