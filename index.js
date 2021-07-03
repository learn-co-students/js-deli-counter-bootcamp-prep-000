var katzDeliLine = [];

function takeANumber (katzDeli, otherDeli) {
    katzDeli.push(otherDeli);
  return `Welcome, ${otherDeli}. You are number ${katzDeli.length} in line.`
};

function nowServing (katzDeliLine) {
 if (katzDeliLine.length === 0 ) {
   return "There is nobody waiting to be served!"
 } else {
   return `Currently serving ${katzDeliLine.shift()}.`
 }
}

function currentLine(katzDeliLine) {
  var empty = [];

  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {

      empty.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
    return "The line is currently: " + empty.join(', ')
  }
}
