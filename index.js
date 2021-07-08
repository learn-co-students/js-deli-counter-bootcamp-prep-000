var katzDeli = [];


function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
    return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift(katzDeliLine) + ".";
  }
  else
   {
    return "There is nobody waiting to be served!"
}
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else
  {
    var currentArray = []
    var i = 0
    while(i < katzDeliLine.length) {
      currentArray.push(` ${i+1}. ` + katzDeliLine[i])
      i++
    }
    return "The line is currently:" + currentArray;
}
}
