function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var lineSize = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${lineSize} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstPerson = katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {

  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } 
  
  var message = `The line is currently: `;
  
  for (var i = 0; i < katzDeliLine.length; i++) {
    var name = katzDeliLine[i];
    var number = i + 1;
    message += `${number}. ${name}, `;
  }
  
  return message.substring(0, message.length - 2);
}




