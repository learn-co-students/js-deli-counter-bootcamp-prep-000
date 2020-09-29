function takeANumber(katzDeli,name) {
  katzDeli.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeliLine){
    if (katzDeliLine.length > 0) {
      var serving = `Currently serving ${katzDeliLine[0]}.`;
      katzDeliLine.shift(1);
      return serving;
    }
    else if (katzDeliLine.length === 0) {
      var served = `There is nobody waiting to be served!`;
      return served;
    }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var count = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
    count.push(` ${[i+1]}. ${katzDeliLine[i]}`);
    }
    return `The line is currently:${count}`;
  }
  else if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  }
}

