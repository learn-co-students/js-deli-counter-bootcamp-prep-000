//At the beginning of the day, the deli is empty and is represented by an empty array, e.g.,
var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name); // adding a new people to the end of the array
return `Welcome, ${name}.` + ` You are number ${katzDeli.length} in line.` // people's position(e.g. "i"th in line)
}



function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
     return "There is nobody waiting to be served!";
}
}


function currentLine(line){
  if (line.length > 0) {
  var sayIt = "The line is currently:";
   for (var i = 0; i < line.length; i++){
    line[i] = ` ${i+1}. ${line[i]}`;
    }
    return `${sayIt}${line}`;
  } else {
      return "The line is currently empty.";
   }
}
