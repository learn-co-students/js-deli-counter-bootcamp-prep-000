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
    return(`Currently serving ${katzDeli.shift()}.`);
  }
  else {
    return "There is nobody waiting to be served!"
  }
  return katzDeli;
}


function currentLine(katzDeliLine) {

  if (katzDeliLine !=0) {
    var inLine = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      inLine.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
      return "The line is currently:" + inLine;
    }
   else {
      return "The line is currently empty."
    }
  }
