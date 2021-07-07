var katzDeliLine = []

function takeANumber(katzDeliLine,newCustomer) {
	katzDeliLine.push(newCustomer)
	return (`Welcome, ${newCustomer}. You are number ${katzDeliLine.indexOf(newCustomer) + 1} in line.`)
}

function nowServing(deliLine) {
	if (deliLine.length != 0) {
    var customer = deliLine[0]
		deliLine.shift()
    return (`Currently serving ${customer}.`)
	} else {
		return ('There is nobody waiting to be served!')
	}

}

function currentLine(line) {
	var array = []
	if (line.length != 0) {
    for (var i = 0; i < line.length; i++) {
		    array.push(` ${i+1}. ${line[i]}`)
	  }

	  return (`The line is currently:${[...array]}`)
  }
  else {
		return ('The line is currently empty.')
	}
}
