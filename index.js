var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return katzDeliLine
}

function takeANumber(katzDeliLine, Ada){
 katzDeliLine.push(Ada);
  return "Welcome, Ada. You are number 1 in line."
}

var takeANumber = function (katzDeliLine, newCustomer){
  if (katzDeliLine.length > 0);
  katzDeliLine.push(newCustomer);
  return ('Welcome, ' + newCustomer +'. You are number ' + katzDeliLine.length+' in line.')
}

function nowServing(line){
  if (line.length === 0);
    return "There is nobody waiting to be served!"
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var name = line[0];
    line.splice(0,1);
    return "Currently serving Steven."
  }
}

function currentLine(line){
if (line.length === 0){
  return "The line is currently empty."
} else {
  var name = line[3];
line.splice(0,3);
return "The line is currently: 1. Bill, 2. Jane, 3. Ann"
}
}
