var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var newPersonIndex = katzDeliLine.length
  var placeInLine = katzDeliLine.length+1;
  katzDeliLine[newPersonIndex] = name;
  return `Welcome, ${name}. You are number ${placeInLine} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  } else {
//returns the first name in array and removes it from array at the same time
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  //katzDeliLine.shift()
}

function currentLine(katzDeliLine) {
  var newArray = [];
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  } else {
    for (let i=0; i<katzDeliLine.length; i++) {
      var j=i+1;
      newArray[i] = +j+ `. ${katzDeliLine[i]}`
    }
    //var string = newArray.join();
    return `The line is currently: ${newArray.join(", ")}`
}
}
