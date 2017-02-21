function takeANumber(katzDeli, otherDeli) {//Open function
var welcome = [];
	for (let i = 0; i < 1; i++) {//Open for
	katzDeli.push(otherDeli);
	welcome.push(`Welcome, ${otherDeli}. You are number ${katzDeli.length} in line.`);
  }//Close for
	return welcome;
}//Close function

function nowServing(deliLine) {//Open function
var servingName = [];
if (deliLine.length > 0) {//Open for
	for (let i = 0; i < 1; i++) {//Open for
    servingName.unshift(`Currently serving ${deliLine[0]}.`);
	  deliLine.splice(0,1);
  }//Close for
  	return servingName[0];
}//Close if
else {//Open else
return `There is nobody waiting to be served!`;
}//Close else
}//Close function

function currentLine(line) {//Open function
var waiting = [];
if (line.length === 0) {//Open if
  return `The line is currently empty.`;
}//Close if
else {//Open else
  for (let i = 0; i < line.length; i++) {//Open for
  waiting.push(` ${i+1}. ${line[i]}`);
  }//Close for
}//Close else
return `The line is currently:${waiting}`;
}//Close function
