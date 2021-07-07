var katzDeli = [];

function takeANumber(katzDeliLine, name) {

  katzDeli = katzDeliLine;
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name)+1} in line.`;

}

function nowServing(array) {

  var newArray = array;

  if ( newArray.length === 0 ) {
  return "There is nobody waiting to be served!";
  }

  while ( newArray.length > 0 ) {
  return `Currently serving ${newArray.shift()}.`;
  }

  return newArray;
}

function currentLine(line) {

  var newLine = line;

  if ( newLine.length === 0 ) {
    return "The line is currently empty.";
  }

  else if ( newLine.length > 0 ) {

    for (var i=0; i<newLine.length; i++) {
      newLine[i] = ` ${i+1}. ${newLine[i]}`;
    }

    return `The line is currently:${newLine}`;
  }
}
