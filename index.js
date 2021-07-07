function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position =  katzDeliLine.indexOf(name) + 1;
  
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var customer = katzDeliLine.shift();
    return `Currently serving ${customer}.`;
  }
}

function currentLine(katzDeliLine) {
  var line = [];
  
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
    
  for (var i = 0; i < katzDeliLine.length; i++) {
    var customer = katzDeliLine[i];
    line.push(" " + (i + 1) + ". " + customer)
  }
  
  return "The line is currently:" + line;
}