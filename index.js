var katzDeliLine = ['Steven','Blake','Avi']

function takeANumber(theLine, name) {
  var spotInLine = theLine.length + 1
  theLine.push(name)
  return "Welcome, " + name + ". You are number " + spotInLine + " in line."
  katzDeliLine = theLine
}




function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}
//
// console.log(nowServing())
// console.log(nowServing())
// console.log(nowServing())
// console.log(nowServing())
// console.log(nowServing())
// console.log(nowServing())

function currentLine(theLine) {
  var listOfCustomers = ""
  if (theLine.length > 0) {
    for (var i = 0; i < theLine.length; i++) {
      listOfCustomers = `${listOfCustomers} ${i+1}. ${theLine[i]},`
    }
    return "The line is currently:" + listOfCustomers.slice(0,-1)
  } else {
    return "The line is currently empty."
  }
}
