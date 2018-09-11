function takeANumber(katzDeliLine, name) {
  var numInLine = katzDeliLine.length + 1;
  var  message = "Welcome, " + name +". You are number " + numInLine + " in line.";
  katzDeliLine.push(name);
  return message;
}

function nowServing(katzDeliLine) {
  var customer = katzDeliLine[0];
  katzDeliLine.shift();
  if (katzDeliLine.length > 1) {
    return "Currently serving " + customer + ".";  
  }
  else return "There is nobody waiting to be served!";
}

function currentLine(line) {
  var n = line.length;
  var array = [];
  if (n < 1) {
    return "The line is currently empty.";
  }
  else 
  for (var i=0; i<n; i++) {
    array.push(" " + [i+1] + ". " + line[i]);
  }
  return "The line is currently:" + array;
}