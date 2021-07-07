function takeANumber(katzDeliLine, name){
katzDeliLine.push(name);
return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
}
function nowServing(katzDeliLine){
 if (katzDeliLine.length > 0) {
   var nowUp = katzDeliLine.shift();
      return "Currently serving " + nowUp + ".";
 }
  else {
    return "There is nobody waiting to be served!";
  }
}
function currentLine(katzDeliLine){
  var lineString = [];
if (katzDeliLine.length === 0){
return "The line is currently empty.";
}
else { 
		for (let i = 0; i < katzDeliLine.length; i++)
		lineString.push((i+1) + '. ' + katzDeliLine[i]);
		var finalLine = lineString.join(', ')
	return "The line is currently: " + finalLine;
}
	
}