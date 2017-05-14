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
		var newArray=[]
			for (var i=0; i<line.length; i++) {
				newArray.push((i+1)+". "+ line[i])
				var b=newArray.join(', ')
			}
		var waitingLine=["The line is currently: "] + b
		return waitingLine
		}
}
