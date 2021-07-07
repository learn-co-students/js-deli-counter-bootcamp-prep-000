
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var number = katzDeliLine.length;
  return "Welcome, "+ name +". You are number " + number + " in line.";
}

function nowServing(katzDeliLine) {
  if(katzDeliLine[0]) {
		var served = katzDeliLine[0];
		katzDeliLine.shift();
		return "Currently serving " + served + ".";
		
	}
	else {
		return "There is nobody waiting to be served!";
	}
}

function currentLine(katzDeliLine) {
  
  if (typeof katzDeliLine !== 'undefined' && katzDeliLine.length > 0) {
		var announcement = "The line is currently: ";
		for (var i = 0; i < katzDeliLine.length; i++){
			announcement = announcement + (i+1) + ". " + katzDeliLine[i] ;
			if (i !== katzDeliLine.length - 1) {
				announcement = announcement + ", ";
			}
		}	
		return announcement;
	}
	else {
		return "The line is currently empty.";
	}
	
}