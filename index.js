function takeANumber(katzDeliLine, name) {
  var katzDeli = [];
  var number;
  katzDeliLine.push(name);
  number = katzDeliLine.length;
  for (var i = 0; i < katzDeliLine.length; i++) {
    katzDeli.push(katzDeliLine[i]);
  }
  return "Welcome, " + name + ". You are number " + number + " in line.";
}

function nowServing(deliLine) {
  var now = '';
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    now = deliLine.shift();
    return "Currently serving " + now + ".";
  }
}

function currentLine(line) {
  var number = 1;
  if(line.length === 0 ) {
    return "The line is currently empty.";
  } else {
    var text = "The line is currently: ";
    for ( var i = 0; i < line.length; i++) {
      if ( i === line.length - 1) {
        text += number + ". " + line[i];
      } else {
      text += number + ". " + line[i] + ", ";
      }
      number++;
    }
    return text;
  }
}
