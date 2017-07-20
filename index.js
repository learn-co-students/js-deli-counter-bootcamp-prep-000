var katzDeli = [];
function takeANumber(katzDeliLine, name){
	katzDeliLine.push(name);
  return ("Welcome, " + name +  ". You are number " + katzDeliLine.length + " in line.");
};
function nowServing(line){
	if (line.length === 0){
		return ("There is nobody waiting to be served!");
	}else{
	var firstInLine= line[0];
	line.shift();
	return ("Currently serving " + firstInLine + ".");
    }
};
function currentLine(namesOfPepleInLine){
	if (namesOfPepleInLine.length === 0){
	var sign= "The line is currently empty.";
  return sign;
	}else {
    	var sign= "The line is currently: "
		for (var i= 0; i < namesOfPepleInLine.length; i++){
			if (i === namesOfPepleInLine.length - 1){
			sign= sign + (i+1) + ". " + namesOfPepleInLine[i];
			}else {
				sign= sign + (i+1) + ". " + namesOfPepleInLine[i] + ", ";
			}
		}
		return sign;
	}

};
