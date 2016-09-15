var katzDeliLine = [];

function takeANumber(katzDeliLine, Name){
	katzDeliLine.push(Name);
  return `Welcome, ${Name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(line){
	if(line.length > 0){
  	var x = line[0];
    line.shift();
    return `Currently serving ${x}.`;
  } else {
  	return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
	var str = '';
	for (var i = 0; i < line.length; i++){
  	str += (i + 1) +'. '+ line[i];
    if (i +1 < line.length){
      str += ', ';
    }
  }
  if (line.length === 0){
    return 'The line is currently empty.';
  }else{
    return `The line is currently: ${str}`;
  }
}
