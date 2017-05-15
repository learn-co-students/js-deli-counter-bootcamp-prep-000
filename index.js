var katzDeliLine = []

function takeANumber(katzDeliLine, people) {
    katzDeliLine.push(people)
      return(`Welcome, ${people}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return (`Currently serving ${katzDeliLine.shift()}.`)
  } else {
    return("There is nobody waiting to be served!")
  }
}


function currentLine(katzDeliLine) {
  var newLine = []
	if (katzDeliLine.length == 0) {
  	return ( `The line is currently empty.`)
	} else {
    for(var i = 0; i < katzDeliLine.length; i++){
    newLine.push(`${i+1}\. ${katzDeliLine[i]}`)
  }
    return (`The line is currently: ${newLine.join(', ')}`)
	}
}
