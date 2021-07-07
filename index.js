//var katzDeliLine = ["Steve", "Ada", "Zion"]

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}


/*
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine[0] + ".";
  }
  function removePerson(){
    katzDeliLine.splice(0.1)
    return katzDeliLine
    }
}
*/



function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
  return (`Currently serving ${katzDeli.shift()}.`);
  }
}


/*
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      return "The line is currently: " + i++ + ". " + katzDeliLine[i];
    }
  }
}
*/



function currentLine(katzDeli) {
  var line = [];
  for (let i = 0; i < katzDeli.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
  return(`The line is currently:` + line);
  }
}