const katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var placeInLine = katzDeliLine.indexOf(name);
  return `Welcome, ${name}. You are number ${parseInt(placeInLine) + 1} in line.`;
};

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
};
function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var len = katzDeliLine.length;
    var text = "The line is currently: ";
      for (var i = 0; i < len; i++) {
      text += `${i + 1}. ${katzDeliLine[i]}`;
  } else {
    return "The line is currently empty.";
  }
};
