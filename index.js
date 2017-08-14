var katzDeliLine = [];


function takeANumber(katzDeliLine, person) {
    katzDeliLine.push(person);
    var inLine = katzDeliLine.length;
    return `Welcome, ${person}. You are number ${inLine} in line.`;
}

function nowServing(katzDeliLine) {
	 if (katzDeliLine.length > 0){
  	return `Currently serving ${katzDeliLine.shift()}.`;
    }else {
  		return `There is nobody waiting to be served!`;
      }
}

function currentLine(katzDeliLine) {
    var nameNums = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      nameNums.push(`${i+1}. ${katzDeliLine[i]}`);
    }
      if (katzDeliLine.length > 0) {
        return `The line is currently: ${nameNums.join(", ")}`;
        } else {
    		return `The line is currently empty.`;
      }
}
