function takeANumber(line,name){
	line.push(name);
	var lineNumber = line.length;
	return `Welcome, ${name}. You are number ${lineNumber} in line.`
}

//accepts current line of people, returns first person in line, removes that person from line
//if nobody is in line, state as such
function nowServing(katzDeliLine){
	let i=0
	while (i<katzDeliLine.length){
		i++;
	}

	if (katzDeliLine.length===0){
		return "There is nobody waiting to be served!"
	}
	else {
		return  `Currently serving ${katzDeliLine.shift()}.`;
	}
}

//accepts the current line, returns current line as string
function currentLine(line){
  //create new array to hold numbered line, properly formatted for output ex: '1. Ada, 2. Grace'
  //number is i+1 to account for zero index
  let numberedLine = [];
  for (var i=0; i<line.length; i++){
    numberedLine.push(` ${i+1}. ${line[i]}`);
  }
  //indicates current line status: empty or num
  if (line.length===0) {
    return "The line is currently empty."
  }
  else {
    return "The line is currently:"+ numberedLine;
    //
  }
}