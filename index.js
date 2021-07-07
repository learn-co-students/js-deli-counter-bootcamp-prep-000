function takeANumber(katzDeli, newCustomer) {
  var position = katzDeli.length+1;
  katzDeli.push(newCustomer)
  return "Welcome, " + newCustomer +". You are number "+ position +" in line."
}


function nowServing (deliLine){
  var name;

  if(deliLine.length === 0){
    return "There is nobody waiting to be served!"
  }

  name = deliLine.shift()
  return "Currently serving "+ name + "."
}

var line = [];





function currentLine(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}
