var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    katzDeli = katzDeliLine.push(name);
    return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}


function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
      do {
        return (`Currently serving ${katzDeli.shift()}.`);
      } while (katzDeli.length !== 0)
  } return katzDeli;

}

var deliLine = [];

function currentLine(katzDeli) {
  for ( let i = 0; i < katzDeli.length; i++ ) {
      deliLine.push(" " + [i+1] + ". " + katzDeli[i]);
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
    return ("The line is currently:" + deliLine);
  }
}
