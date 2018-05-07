var katzDeliLine = []

function takeANumber(line,person) {
    
    line.push(person)
    
    return (`${person}, you are ${line.length} in the line`) 
}

function nowServing(line) {
	if (line.length>0) {
	    return line.shift()
    }
	else {
		return ("There is nobody waiting to be served!") }
}

function currentLine(line) {
	
	if (line.length>0) {
		var sentence = 'The line is currently:'
		for (var i=0;i==line.length;i++) {
			sentence = sentence + (` ${i}. ${line[i]}`)
  }
    return sentence
  }
	else {
		return ('The line is currently empty')
    }
}