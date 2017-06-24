function takeANumber(katzDeliLine, name){
	katzDeliLine.push(name);
	return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
	if (katzDeliLine.length == 0) {
		return "There is nobody waiting to be served!";
	} else {
		var nowServing = katzDeliLine.shift();
		return "Currently serving " + nowServing + ".";
	}
}

function currentLine(katzDeliLine){
	if (katzDeliLine.length == 0){
		return "The line is currently empty."
	} else {
		var string = "The line is currently: ";
		for (let i = 0; i < (katzDeliLine.length); i++){
			if ((i+1) == katzDeliLine.length){
				string = string + (i+1) + ". " + katzDeliLine[i];
			}else{
				string = string + (i+1) + ". " + katzDeliLine[i] + ", ";
			}
			}
		}
		return string;
	}
