var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return(`Welcome, ` + name + `. You are number ` + katzDeliLine.length + ` in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return(`There is nobody waiting to be served!`);
  } else {
      return(`Currently serving ` + katzDeliLine.splice(0, 1) +  `.`);
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return(`The line is currently empty.`);
  } else {
  var line = katzDeliLine;
  return(`The line is currently: ` + line);
  }
}

 /*`The line is currently: ` + katzDeliLine.indexOf(katzDeliLine[i + 1]) + `. ` + katzDeliLine[i] + `, ` ); */
 
 /*    for (var i = 0; i <= katzDeliLine; i++){
        return(`This worked`);
        */