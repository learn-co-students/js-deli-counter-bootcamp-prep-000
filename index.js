function takeANumber(katzDeliLine, customer){
	katzDeliLine.push(customer)
	return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

function currentLine(katzDeliLine) {
	if (katzDeliLine.length === 0 ){
		return "The line is currently empty."
	}
	var newArray = katzDeliLine.map(function(customer, index){
		return `${index+1}. ${customer}`
		}
		)
	return `The line is currently: ${newArray.join(', ')}`
	
}

function nowServing(katzDeliLine){
	if (katzDeliLine.length === 0){
		return "There is nobody waiting to be served!"
	}
	return `Currently serving ${katzDeliLine.shift()}.`
}
