

function takeANumber(katzdeliLine, name) {
  	katzdeliLine.push(name);
  	return `Welcome, ${name}. You are number ${katzdeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
 
 if (katzDeliLine.length > 0) {
	return `Currently serving ${katzDeliLine.splice(0, 1)}.`;
 }

if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
}
function currentLine(katzDeliLine) {
  let currentL = [];   
  for (let i = 1; i <= katzDeliLine.length; i++) {
    currentL.push(`${i}. ${katzDeliLine[i - 1]}`);
    
  }
        if (katzDeliLine.length === 0 ){
          return "The line is currently empty." ;
        	}
         else {
        	return `The line is currently: ${currentL.join(', ')}`;
        	  }
  }

    	 
  

	      
	      
	      
	      
	      
	      