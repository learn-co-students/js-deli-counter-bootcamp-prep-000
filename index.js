var katzDeliLine =[];
var msg;
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  msg = "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
  return msg;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    msg = "There is nobody waiting to be served!"
  } else {
    var currentCustomer = katzDeliLine.shift()
    msg = "Currently serving " + currentCustomer + "."
  }
  return msg;
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    msg = "The line is currently empty."
  } else {
    msg = "The line is currently:"
    var line = '';
    for (let i=0; i < katzDeliLine.length; i++) {
      var y = i;
      if (i < katzDeliLine.length - 1) {
        line = `${line} ${y+1}. ${katzDeliLine[i]},`
      } else {
        line = `${line} ${y+1}. ${katzDeliLine[i]}`
      }


    }
    msg = msg+line;
  }
  return msg;

}
