var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var serving = katzDeli.shift();
    return `Currently serving ${serving}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var i = 0;
    var str = "The line is currently: ";
    while (i < katzDeliLine.length - 1) {
      str += `${i+1}. ${katzDeliLine[i]}, ` 
      i++
    }
    i++;
    str += `${i}. ${katzDeliLine[i-1]}`
    }
    return str;
  }
  
