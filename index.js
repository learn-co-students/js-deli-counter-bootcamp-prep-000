function takeANumber (currentLine, name)
{ 
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length } in line.`;
}
function nowServing(katzDeliLine)
{
  if (katzDeliLine.length <1) {
    return "There is nobody waiting to be served!"
    
  } else {
    var currentlyServing = katzDeliLine[0]
    katzDeliLine.shift();
    return `Currently serving ${currentlyServing}.`
  }
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var peopleInLineArr = []
    for (var i = 0; i < katzDeliLine.length; i++) {
      peopleInLineArr.push(`${i+1}. ${katzDeliLine[i]}`)
    }
    var peopleInLineString = peopleInLineArr.join(", ")
    return `The line is currently: ${peopleInLineString}`
  }
}