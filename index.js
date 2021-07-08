
function takeANumber(katzDeliLine, name){
	katzDeliLine.push(name);
	return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
	if (katzDeliLine.length === 0)
	{return "There is nobody waiting to be served!";}

	else { var name = katzDeliLine.shift();
		return `Currently serving ${name}.`}
}


function currentLine(katzDeliLine){
	if (katzDeliLine.length === 0) {return "The line is currently empty."}
	else {
		var result = "The line is currently: " ;
		for (var i = 1; i <= katzDeliLine.length; i++){
			result += `${i}. ${katzDeliLine[i-1]}, `
		} return result.slice(0,result.length-2);
	}

}
