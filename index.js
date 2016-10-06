function takeANumber(katzDeliLine, name){
	katzDeliLine.push(name);
	return `Welcome, ${name}. You are number ${(katzDeliLine.length)} in line.`
}

function nowServing(array){
	if(array.length > 0){
    var store = array[0];
    array.shift();
		return `Currently serving ${store}.`;
    array.shift();
	}
	else{
		return `There is nobody waiting to be served!`;
	}
}

function currentLine(array){
	var returnArr = "The line is currently:";
  var finalArr = "";
	if(array.length > 0){
		for(var i = 0; i < array.length; i++){
			returnArr += ` ${(i+1)}. ${array[i]},`;
		}
		for(var i = 0; i < returnArr.length - 1; i++){
      finalArr += returnArr[i];
    }
    return finalArr;
	}else{
		return "The line is currently empty.";
	}
}
