function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var currentPos
  currentPos = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${currentPos} in line.`
}

function nowServing(array) {
  if (array.length === 0) {
    return `There is nobody waiting to be served!`
  }
  if (array.length>0) {
    var firstInLine = array.shift()
    return `Currently serving ${firstInLine}.`
  }
}


function currentLine(array) {
  var people = [];
  if (array.length === 0) {
    return `The line is currently empty.`
  }
  if (array.length>0){
    for (var i=0; i<array.length; i++) {
      var nameAndNumber = ` ${i+1}. ${array[i]}`
      people.push(nameAndNumber)
    }
    return `The line is currently:${people}`
  }
}
