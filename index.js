function takeANumber(katzDeli, person){
  katzDeli.push(person);
  return `Welcome, ${person}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli){
  if (katzDeli.length !== 0){
    return `Currently serving ${katzDeli.shift()}.`;
  }
  return "There is nobody waiting to be served!";
}

function currentLine(katzDeli){
  if (katzDeli.length !== 0){
    var currLine = "The line is currently: ";
    for (let i = 0; i < katzDeli.length; i++){
      if (i > 0) currLine += ", ";
      currLine += `${i+1}. ${katzDeli[i]}`;
    }
    return currLine;
  }
  return "The line is currently empty.";
}
