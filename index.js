const katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var placeInLine = katzDeliLine.indexOf(name);
  return `Welcome, ${name}. You are number ${parseInt(placeInLine) + 1} in line.`;
};

function nowServing() {
  var first = katzDeliLine.shift();
    if (first === undefined) {
      return "There is nobody waiting to be served!";
    } else {
      return `Currently serving ${first}`;
      katzDeliLine.shift();
    }
};

function currentLine() {
  if (katzDeliLine.length >= 1) {
    var len = katzDeliLine.length;
    var text = "The line is currently: ";
    for (var i = 0; i < len; i++) {
    text += `${i + 1}. ${name[i]}`;
  } else {
    return "There is nobody waiting to be served!";
  }
};
