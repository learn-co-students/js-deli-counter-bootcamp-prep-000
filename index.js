var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var lineNum = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${lineNum} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var cust = katzDeliLine.shift();
    return `Currently serving ${cust}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var str = "The line is currently:"

    for (var i = 0; i < katzDeliLine.length - 1; i++) {
      var person = katzDeliLine[i];
      str += ` ${i + 1}. ${person},`;
    }
      str += ` ${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`;

    return str;
  }

  return "The line is currently empty."
}
