function takeANumber(people, name) {
  var position = people.length + 1;
  people.push(name);
  
  return "Welcome, " + name +". You are number " + position +" in line.";
}

function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var name = katzDeliLine.shift();
  return "Currently serving " + name +".";
}

function currentLine(people) {
  if(people.length === 0) {
  return "The line is currently empty." 
  }
  
  var newStr = []
  for(var i = 0; i < people.length; i++) {
    var person = people[i];
    
    newStr.push(` ${i + 1}. ${person}`)
    
  }

  return "The line is currently:" + newStr
}