var katzDeli = [];

function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);

  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    var beingServed = katzDeliLine.shift()
    return `Currently serving ${beingServed}.`
  }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  }
  else {
    var output = "The line is currently: "
    for (var i = 0; i < line.length; i++){
      output += `${i + 1}. ${line[i]}, `;
    }
    return output.slice(0,-2);
  }
}
