var katzDeli = [];

function takeANumber (katzDeliLine, name) {

  katzDeliLine.push(name);
  return "Welcome, " + `${name}` + ". You are number " + katzDeliLine.length + " in line.";

}

function nowServing (katzDeliLine) {

  if (katzDeliLine.length === 0){

    return "There is nobody waiting to be served!";

  } else {

    return "Currently serving " + katzDeliLine.shift() + ".";

  }

}

function currentLine (katzDeliLine) {

  var fullLine = [];

  if (katzDeliLine.length === 0) {

    return "The line is currently empty.";

  } else {

    for (var i = katzDeliLine.length; i > 0; i--) {

      fullLine.unshift(` ${i}. ${katzDeliLine.pop()}`)

    }

    return `The line is currently:${fullLine}`;

  }

}
