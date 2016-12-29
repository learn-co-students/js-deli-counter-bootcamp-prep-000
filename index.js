function takeANumber(katzDeli,name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {

  var i = 0;

  while (i < katzDeli.length) {
    i++;

  }
  if (katzDeli.length != 0) {
    return `Currently serving ${katzDeli.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
  return katzDeli;
}


function currentLine(katzDeliLine){


  var i = 0;
  while (i < katzDeliLine.length) {
    i++
  }

  if (katzDeliLine.length !=0) {
    return (`The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`);
  }
  else {
    return "The line is currently empty.";
  }

  return katzDeliLine;
}
