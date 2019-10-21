function takeANumber(katzDeliLine, nname) {
  katzDeliLine.push(nname);
  return (`Welcome, ${nname}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  var length = katzDeliLine.length;
  if (!length) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return (`Currently serving ${name}.`);
  }
}

function currentLine(katzDeliLine) {
  var array = []
  var length = katzDeliLine.length
  if (!length) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < length; i++) {
      array.push((i + 1) + ". " +  katzDeliLine[i]);
    }
  }
  return ("The line is currently: " + array.join(", "))
}
