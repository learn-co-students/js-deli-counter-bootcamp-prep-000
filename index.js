var line = [];

function takeANumber(line, customer){
  line.push(customer);
  return `Welcome, ${customer}. You are number ${line.length} in line.`;
}

function nowServing(line){
  if(line === 'undefined' || line.length == 0){
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`;
}

function currentLine(line){
  if(line === 'undefined' || line.length == 0){
    return "The line is currently empty."
  }

  var totalInLine = line.length;
  var inLine = "The line is currently: ";

  for(var i=0; i < line.length; i++){
    var position = i + 1;
    inLine += `${position}. ${ position === totalInLine ? line[i] : line[i] + ', ' }`;
  }
  return inLine;
}
