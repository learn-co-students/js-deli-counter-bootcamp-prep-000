function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var place = katzDeliLine.indexOf(name);
  return `Welcome, ${name}. You are number ${place + 1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0]) {
    var guy = katzDeliLine.shift();
    return `Currently serving ${guy}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine[0]) {
    var mentshen = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      mentshen.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently:" + mentshen.toString()
  } else {
    return "The line is currently empty."
  }
}
