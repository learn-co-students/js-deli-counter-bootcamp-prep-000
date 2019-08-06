

function takeANumber(katzDeliLine, newPerson){
	katzDeliLine.push(newPerson);
	return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
	
}

  function nowServing(katzDeliLine){
    
  	if (!katzDeliLine || katzDeliLine.length === 0){
		return "There is nobody waiting to be served!";
}
	else {
	  var name = katzDeliLine[0];
	  katzDeliLine.shift();
		return `Currently serving ${name}.`;
}
	  
}





    function currentLine(line){
		var result = `The line is currently: `;
		if (!line || line.length === 0){
			return 'The line is currently empty.' ;
}
		else {
			for (let i = 0; i < line.length; i++)
				if(i != line.length - 1){
					result += `${i+1}. ${line[i]}, `;
                }
				else {
					result += `${i+1}. ${line[i]}`;
}
    return result ;
}
		
}







