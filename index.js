var katzDeli = []

function takeANumber(katzDeliLine, name){
	katzDeliLine.push(name)
	return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){  //katzDeliLine = ["Mike", "Nicole"]
	if (katzDeliLine.length>0) {   // true
		var firstInLine = katzDeliLine.shift() // katzDeliLine = ["Nicole"]
	return `Currently serving ${firstInLine}.`

}
	else {
		return "There is nobody waiting to be served!"
}
}

function currentLine(katzDeliLine){
	var line = []
	for (var i = 0; i<3 ; i++) {
		line.push(` ${i+1}. ${katzDeliLine[i]}`) ;}
	if (katzDeliLine.length>0) {
			return `The line is currently:${line}`
	}
else {
	return "The line is currently empty."
}
}
