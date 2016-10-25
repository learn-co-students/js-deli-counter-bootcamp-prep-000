function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line){
  if (line.length > 0){
    return `Currently serving ${line.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  if (line.length > 0){
    var currentString = 'The line is currently: '
    for (let i = 0; i < line.length; i++){
      currentString = i < line.length - 1 ? (currentString + `${i+1}. ${line[i]}, `) : (currentString + `${i+1}. ${line[i]}`)
    }
    return currentString;
  } else {
    return "The line is currently empty."
  }
}
