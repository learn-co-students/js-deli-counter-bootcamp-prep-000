var katzDeliLine = [];

function takeANumber (line, name) {
  var c = line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
};

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() +".";
  }
};

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
      var myLine = [];
      for (let i = 0; i<katzDeliLine.length; i++) {
        var j = parseInt(i) + 1;
        myLine.push(` ${j}. ${katzDeliLine[i]}`)
      }    return "The line is currently:" + myLine;
    }
  }
