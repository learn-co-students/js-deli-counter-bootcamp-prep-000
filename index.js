function takeANumber (katzDeliLine, name) {
//Add people to the line
katzDeliLine.push(name);
return("Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) +  " in line.");
}



function nowServing (katzDeliLine) {
/*first person in line than 
remove that person

 or if nobody in line */
if (katzDeliLine.length === 0) {

 return("There is nobody waiting to be served!");

} else { 
	var firstInLine = katzDeliLine[0];
	katzDeliLine.shift();

	return("Currently serving " + firstInLine);
	}

}


function currentLine (katzDeliLine) {

/* current line as a string

if nobody in line 

*/
if (katzDeliLine.length === 0) {

return("The line is currently empty.");
} 

else { 
	//loop to return the index and the item in the array

	var s = "";
	for(var i = 0; i < katzDeliLine.length; i+=1){
		s+= (i+1)+ ". " + katzDeliLine[i] +" ";
	}
	}

	return("The line is currently: " + s);
}