var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  console.log(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function currentLine(katzDeliLine) {
  var numberandName = [];
  if (!katzDeliLine.length) {
    console.log("The line is currently empty.")
    return "The line is currently empty."
  } else {  
      for(var i = 0; i < katzDeliLine.length; i++) {
      numberandName.push([i+1] + ". "+ katzDeliLine[i]);
    }
  }
 console.log("The line is currently: " + numberandName.join(', '));
 return "The line is currently: " + numberandName.join(', ');
}

function nowServing(katzDeliLine, name) {
  if (!katzDeliLine.length) {
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  } else {
  console.log("Currently serving " + katzDeliLine.shift() + ".");
  return "Currently serving " + katzDeliLine.shift() + "." ;
  }
}

takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");
currentLine(katzDeliLine);
nowServing(katzDeliLine);
currentLine(katzDeliLine);
nowServing(katzDeliLine);
takeANumber(katzDeliLine, "Steven");
nowServing(katzDeliLine);
currentLine(katzDeliLine);
takeANumber(katzDeliLine, "Bill");
takeANumber(katzDeliLine, "Jane");
takeANumber(katzDeliLine, "Ann");
currentLine(katzDeliLine);
nowServing(katzDeliLine);
nowServing(katzDeliLine);
nowServing(katzDeliLine);
takeANumber(katzDeliLine, "Nicky");
takeANumber(katzDeliLine, "Jared");
takeANumber(katzDeliLine, "Katie");
currentLine(katzDeliLine);
