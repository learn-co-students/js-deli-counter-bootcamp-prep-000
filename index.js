var katzDeliLine = [];

function currentLine(x) {
  // create blank array to store values
  var line = [];
  // if length of array is 0, return "the line is currently empty"
  if (x.length === 0) {
    return "The line is currently empty.";
  } 
  // otherwise, loop through each value in array and add it to var line
  else {
    for(var i = 0; i < x.length; i++) {
      line += `${(i + 1)}. ${x[i]}, `;
    }
    // remove the space and comma from the final person in the line
    line = line.slice(0, line.length-2)
    //return everyone in the line
    return `The line is currently: ${line}`
  }
}

function takeANumber(katzDeliLine, name) {
  // add name to end of katzDeliLine
  katzDeliLine.push(name);
  // return name's place in line
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(x) {
	// if length of array is 0, return 'there is nobody waiting to be served'
	if (x.length === 0) {
		return "There is nobody waiting to be served!";
	}
	// otherwise, remove the first person from the line
	else {
		var first = x.shift();
		//return the removed person
		return `Currently serving ${first}.`;
	}
}

