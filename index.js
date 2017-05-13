var katzDeliLine=[];


function takeANumber(katzDeliLine, name) {
	var i=katzDeliLine.length+1
	katzDeliLine.push(name)
	return "Welcome, "+name+ ". You are number "+ i +" in line."
	i+=1
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return "There is nobody waiting to be served!"
  } else {
  	return("Currently serving " +katzDeliLine.shift() +".")
    }
}

function currentLine(line) {
	if (line.length===0) {
		return "The line is currently empty."
	} else {
		for (i=0; i<line.length-1; i++) {
			return "The line is currently: " + line.length +"." +line[i]
		}
	}
}
