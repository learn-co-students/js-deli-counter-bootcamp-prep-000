var katzDeli = [];

function takeANumber(deliLine, name){
  var placeInLine = deliLine.length + 1;
  var outputString = (`Welcome, ${name}. You are number ${placeInLine} in line.`);
  deliLine.push(name);
  return outputString;
}
function nowServing(deliLine){
  var outputString;
  if (deliLine.length === 0){
    outputString = "There is nobody waiting to be served!"
  }
  else {
    outputString = "Currently serving " + deliLine[0] + ".";
    deliLine.shift();
  }return outputString;
}

function currentLine (deliLine){
  var outputString;
    if (deliLine.length === 0) {
     outputString = "The line is currently empty."
    }
    else{
     outputString = "The line is currently: "
     for(var i = 0; i < deliLine.length ; i++){
   if (i === 0){
    outputString = outputString + (i+1) + ". " + deliLine[i];
    }
    else{
    outputString = outputString + ", " + (i+1) + ". " + deliLine[i];
   }
   }
  }
return outputString;
}