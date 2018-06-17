
var katzDeliLine = [];  //At beginning of day empty line

function takeANumber(katzDeliLine,Name) {
  //Accepts currentLine of people held in variable katzDeli, and the name of the new person's name as parameter. Then adds the new person's name to end of katzDeliLine and return their position in the line.
   katzDeliLine.push(Name);  
   var placeInLine = katzDeliLine.length;
   var message = `Welcome, ${Name}. You are number ${placeInLine} in line.`
   return message
}

function nowServing(LineArray) {
  //Returns first person in line (katzDeliLine) then removes that individual from line (katzDeliLine)
  if (LineArray.length === 0) {
    return "There is nobody waiting to be served!"}
    else {
    var beingServed = LineArray[0];
    var message = "Currently serving " + beingServed +".";
    LineArray.shift();
    return message;
    }
}

function currentLine(LineArray) {
  //Returns current line, i.e. if current line is ["Ada", "Grace"], the it would return "The line is currently: 1. Ada, 2. Grace"
  //If empty will return "The line is currently empty."
  if (LineArray.length === 0) {
    return "The line is currently empty."
  }
  else {
    var listarray = [];
    for (let i=0; i<LineArray.length;i++) {
     var lineNo = i+1;
     var name = LineArray[i];
     listarray.push(`${lineNo}. ${name}`);       
    }
    var message = listarray.join(', ');
    return `The line is currently: ${message}`;
  }
}
