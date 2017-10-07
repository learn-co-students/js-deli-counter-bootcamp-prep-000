const katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  let place = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${place} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  } else {
    let nextPerson = katzDeliLine.shift();
    return `Currently serving ${nextPerson}.`;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'The line is currently empty.';
  } else {
    let peopleInLine = 'The line is currently:';
    for (var i = 0; i < katzDeliLine.length; i++){
      peopleInLine += ' ' + (i + 1) + '. ' + katzDeliLine[i];
      if (i + 1 < katzDeliLine.length){
        peopleInLine += ',';
      }
    }
    return peopleInLine;
  }
}
