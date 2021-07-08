function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  var message = '';
  if (katzDeliLine[0] === undefined) {
    message = 'There is nobody waiting to be served!'
  } else {
    message = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
  }
  return message
}

function currentLine(katzDeliLine) {
  var message = '';
  if (katzDeliLine[0] === undefined) {
    message = 'The line is currently empty.'
  } else {
    message = 'The line is currently: ';
    for (var i = 0; i < katzDeliLine.length; i++) {
      message += `${i + 1}. ${katzDeliLine[i]}, `;
    }
    message = message.slice(0, message.length - 2);
    console.log(message);
  }
  return message;

}

test = ['son', 'duy', 'tin']
currentLine(test);
