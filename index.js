var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + position + " in line."
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    var person = katzDeliLine.shift();
    return "Currently serving " + person + "."
  }
}



var line = [];

function currentLine(katzDeliLine) {
  for (let i = 0; i < katzDeliLine.length; i++) {
    line.push(" " + [i+1] + ". " + katzDeliLine[i])
  }
  if (katzDeliLine.length < 1) {
    return "The line is currently empty."
  } else {
      return ("The line is currently:" + line);
    }

}
//
//
// function currentLine(katzDeliLine) {
//   if (katzDeliLine.length < 0) {
//     return "The line is currently empty."
//   } else {
//     var line = [];
//     for (let i = 0; i < katzDeliLine.length; i++) {
//       line.push([i+1] + ". " + katzDeliLine[i])
//       return ("The line is currently: " + line);
//     }
//   }
// }
