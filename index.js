var katzDeli = []

function takeANumber(katzDeliLine, newPerson) {
	katzDeliLine.push(newPerson)
	return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
	if (katzDeliLine.length != 0) {
    	var currentCustomer = katzDeliLine[0]
		katzDeliLine.shift()
		return 'Currently serving ' + currentCustomer + '.'
	} else {
    	return "There is nobody waiting to be served!"
	}
}

function currentLine(katzDeliLine) {
	if (katzDeliLine.length != 0) {
    var lineString = ""
		for (var i = 0; i < katzDeliLine.length; i++) {
        	if (i === 0) {
			         lineString = `The line is currently: ${i+1}. ${katzDeliLine[i]}`
			    }
			    else {
            	 lineString = lineString + `, ${i+1}. ${katzDeliLine[i]}`
			    }
		}
    return lineString
  } else {
		  return "The line is currently empty."
  }
}
