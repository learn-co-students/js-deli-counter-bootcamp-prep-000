function takeANumber(line, name){
	line.push(name)
	return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
	if (line.length > 0){
		var serving = line.shift()
		return `Currently serving ${serving}.`
	}
	else{
		return "There is nobody waiting to be served!"
	}
}

function currentLine(line){
	if (line.length === 0){
		return "The line is currently empty."
	}
	else{
		var result = []
		for (var i = 0; i < line.length; i++){
			result.push(`${i+1}. ${line[i]}`)
		}
		return `The line is currently: ${result.join(', ')}`
	}
}
