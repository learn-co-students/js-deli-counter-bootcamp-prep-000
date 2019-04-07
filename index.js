function takeANumber(current_line, name){
	current_line.push(name);
	return `Welcome, ${name}. You are number ${current_line.length} in line.`
}

function nowServing(katzDeliLine){
	
	if (katzDeliLine.length === 0){
		return "There is nobody waiting to be served!";
	}else{
		var current_person = katzDeliLine[0];
		katzDeliLine.shift();
		return `Currently serving ${current_person}.`;
	}
}


//adds poeple's name, a ., and comma to peoples if not end of array
function current_line_with_people_and_numbers(katzDeliLine){
	var line_with_nameandnumber = []
	for (var i = 0; i < katzDeliLine.length; i++){
		if(katzDeliLine.length - 1 != i){
			line_with_nameandnumber[i] = `${i + 1}. ${katzDeliLine[i]},`;
		}else{
			line_with_nameandnumber[i] = `${i + 1}. ${katzDeliLine[i]}`;	
		}//if-else ends here.
	}//for ends here

	return line_with_nameandnumber;
}

function currentLine(katzDeliLine){

	if(katzDeliLine.length === 0){
		return "The line is currently empty.";
	}else{
	var current_line = current_line_with_people_and_numbers(katzDeliLine);
	var current_line_to_string = current_line.join(" "); 
	return `${"The line is currently: "}${current_line_to_string}`;
	}

}