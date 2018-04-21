var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  console.log("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    console.log("There is nobody waiting to be served!");
    return "There is nobody waiting to be served!";
  } else {
    //console.log("Currently serving " + katzDeliLine.shift() + ".");
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty.";
  } 
  var numbersWithNames = [];
  
  for(var i=0; i<katzDeliLine.length; i++) {
    numbersWithNames.push(i+1 + ". " + katzDeliLine[i]);
  }
  console.log("The line is currently: " + numbersWithNames);
  return "The line is currently: " + numbersWithNames.join(', ');
}