function takeANumber(katzDeliLine, newCust){
    katzDeliLine.push(newCust);
    return `Welcome, ${newCust}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var temp = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${temp}.`
  }
}

function currentLine(line) {
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    var list = "The line is currently:";
    for (let i = 0; i < line.length; i++){
      list += (i===0?" ":", ")+ `${i+1}. ${line[i]}`
    }
    return list;
  }
}
