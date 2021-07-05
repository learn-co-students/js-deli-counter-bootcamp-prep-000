function takeANumber (KatzDeliLine, name) {
  KatzDeliLine.push(name);
  return "Welcome, " + name + "." + " You are number " + KatzDeliLine.length + " in line.";
}

function nowServing (person) {
  if (person.length > 0)
  return "Currently serving " + person.shift() + ".";
  else
  return "There is nobody waiting to be served!";
}

function currentLine (KatzDeliLine) {
  if (KatzDeliLine.length > 0) {
    var line = [];
    for (let i=0; i<KatzDeliLine.length; i++) {
    line.push(" " + (i+1) + ". " + KatzDeliLine[i]);
  }
  return "The line is currently:" + line;
  } else   
    return "The line is currently empty.";
}
