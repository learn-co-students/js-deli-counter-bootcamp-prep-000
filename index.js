var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name) + 1;
  return ("Welcome, " + name + ". " + "You are number " + position + " in line.");
};

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var name = katzDeliLine.shift();
    return ("Currently serving " + name + ".");
  } else {
    return "There is nobody waiting to be served!";
  }
};

function currentLine(line) {
  var result = "";
  if (line.length == 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < line.length; i++) {
      var index = i + 1;
      result += index + ". " + line[i] + ", ";
    }
    return "The line is currently: " + result.substring(0, result.length - 2);
  }
};
