var katzDeli = [];

function takeANumber(katzDeli, ime){
  katzDeli.push(ime);
  return `Welcome, ${ime}. You are number ${katzDeli.length} in line.`;
}

function nowServing(array){
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${array.shift()}.`
}

function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  var stringToReturn = "The line is currently:";
  for (var i = 0; i < line.length; i++) {
    if (i != (line.length - 1)) {
      stringToReturn += " "+(i+1)+". "+line[i]+",";
    }else{
      stringToReturn += " "+(i+1)+". "+line[i];
    }
  }
  return stringToReturn;
}
