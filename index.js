var katzDeli = [];

function takeANumber(people, name) {
  people.push(name);
  console.log("Welcome, " + name + ". You are number " + people.length + " in line.");
return "Welcome, " + name + ". You are number " + people.length + " in line."; 
}


function nowServing(people) {
  if (people.length < 1) {
   console.log("There is nobody waiting to be served!");
   return "There is nobody waiting to be served!";
   } else { 
    return "Currently serving " + people.shift() + "."; 
   }
}

function currentLine(line) {
  if (line.length < 1)
  return "The line is currently empty.";
  
  var lineInformation =[]; 
  
  for (let i = 0; i < line.length; i++) {
			lineInformation.push(` ${i + 1}. ${line[i]}`);
	    console.log("The line is currently:" + lineInformation);
			}
			return "The line is currently:" + lineInformation;
}


 