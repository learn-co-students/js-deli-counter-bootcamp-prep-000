var katzDeliLine = [];
function takeANumber(arrayLine, person){
  arrayLine.push(person);
  for(var i=0; i<arrayLine.length; i++){
  return `Welcome, ${person}. You are number ${arrayLine.length} in line.`;
  }
}

function nowServing(currentlyInLine){
	if(currentlyInLine.length>0){
		return `Currently serving ${currentlyInLine.shift()}.`;//return arrayName.shift() removes the element from the array BUT also returns the VALUE of that element to the CALLER!!!!
	}
	else {
		return 'There is nobody waiting to be served!';
	}
}
function currentLine(peopleInLine){
  if (peopleInLine.length>0){
    var tempArray = [];
    for (var i=0; i<peopleInLine.length; i++){
      tempArray.push(` ${i+1}. ${peopleInLine[i]}`);
    }
    return 'The line is currently:' + tempArray.join();
  }
  else {
    return 'The line is currently empty.';
  }
}
