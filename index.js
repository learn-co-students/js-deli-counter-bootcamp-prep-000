function takeANumber(currentLine, personName){
  currentLine.push(personName);
  var numInLine = parseInt(currentLine.indexOf(personName)) + 1;
  return `Welcome, ${personName}. You are number ${numInLine} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length !== 0){
    var nextUp = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${nextUp}.`;
  }
  else{ 
    return 'There is nobody waiting to be served!' 
  }
}

function currentLine(katzDeliLine){
  var line = [];
  for(var i = 0;i < katzDeliLine.length; i++) {
    line.push(` `+[i + 1]+`. `  + katzDeliLine[i])
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } 
  else{
       return(`The line is currently:` + line);
  }
}