// var katzDeliLine = [];
function takeANumber (line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}


function nowServing (katzDeliLine){
  
  if (katzDeliLine.length === 0) {
 return "There is nobody waiting to be served!";
  } else {
    return  "Currently serving " + katzDeliLine.shift() + "."}
}


function currentLine (line) {
  let i = 0;
  while (i<line.length){
  line.push(' ' + [i+1] + '. ' + line[i]);
   i++;
  }
  if (line.length === 0) {
      return "The line is currently empty."}
      else {
        return "The line is currently: " + line;
      }
}

