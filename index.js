var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(personBeingServed){
  if (personBeingServed.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = personBeingServed[0];
    personBeingServed.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(line){
  for(var x=0;x<line.length;x++){
      line[x] = (x+1) + ". " + line[x];
  }

  var myString = line.join(", ");
  
  if(line.length===0){
    return "The line is currently empty.";
  } else {
    return "The line is currently: " + myString;
  }
}