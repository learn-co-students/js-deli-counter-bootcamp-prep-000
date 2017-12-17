var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(line){
    if(line.length === 0){
      return `There is nobody waiting to be served!`;
    } else {
      var next = line[0];
      line = line.shift();
      return `Currently serving ${next}.`;
    }
}

function currentLine(line){
  if(line.length === 0){
    return `The line is currently empty.`;
  } else {
    var string = "";
    for(var i = 0; i<line.length; i++){
      string += `${i+1}. ${line[i]}, `;
    }
  var newString = string.slice(0, -2);
  return `The line is currently: ${newString}`;
  }
}
