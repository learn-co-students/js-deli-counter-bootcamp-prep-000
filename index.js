var katzDeli = [];
function takeANumber(katzDeli, name){
  katzDeli.push(name);
  var position=katzDeli.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(array){
  if(array.length > 0){
      var fElement= array.shift();
      return `Currently serving ${fElement}.`;
      }
  else{
      return "There is nobody waiting to be served!";
      }
}

function currentLine(line){
	if(line.length <=0){
		return "The line is currently empty.";
	}
	else{
		var newLine = [];
		for(let i=0;i<line.length;i++){
		  if(i===0)
		    {
			  newLine[i]=`${i+1}. ${line[i]}`;
		    }
		  else{
		     newLine[i]=` ${i+1}. ${line[i]}`;
		  }
		}
		
		return `The line is currently: ${newLine}`;
		}
}