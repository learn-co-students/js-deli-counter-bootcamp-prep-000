function takeANumber(katzDeliLine, name){
  //add name to line
  katzDeliLine.push(name);
  var greeting = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  return greeting;
}

function nowServing(katzDeliLine){
  //check if there is a line
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  }

  else if(katzDeliLine.length > 0){
    //create string for person currently being served
    var currentlyServing = `Currently serving ${katzDeliLine[0]}.`;
    //remove person being served from line
    katzDeliLine.shift();
    return currentlyServing;
  }

}

function currentLine(katzDeliLine){
  //check to see if line is empty
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.';
  }
  //check to see if there is a line
  else if(katzDeliLine.length >0){
    //create string variable for current line message
    var currentLineString = 'The line is currently: ';
    //loop through line to add the person and their position in line to currentLineString
    for(var i = 0; i<katzDeliLine.length; i++){
      //check to see if they are first person in line, add their place in line and name to currentLineString
      if(i === 0){
        currentLineString = currentLineString.concat(`1. ${katzDeliLine[i]}`)
      }
      //for everyone who is not first in line, add a comma, their place in line, and name to currentLineString
      else{
        var place = parseInt(i) + 1;
        currentLineString = currentLineString.concat(`, ${place}. ${katzDeliLine[i]}`);
      }
    }
    return currentLineString;
  }
}
