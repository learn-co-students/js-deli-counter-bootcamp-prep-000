var KatzDeli = [];

function takeANumber(KatzDeliLine, name) {
  KatzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${KatzDeliLine.length} in line.`);
}

function nowServing(KatzDeliLine) {
  if(KatzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var currentPerson = KatzDeliLine[0];
    KatzDeliLine.shift();
    return `Currently serving ${currentPerson}.`;
  }
}

function currentLine(line) {
  var msg = "The line is currently: ";
  if(line.length > 0) {
    for ( var i = 0; i < line.length; i++) {
      msg += `${i+1}. ${line[i]}`;
      if(i < line.length-1) {
        msg += ", ";
      }
    }
    return msg;
  }
  else {
    return "The line is currently empty.";
  }
}