var katzDeliLine = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  // adds a person to the line.
  // console.log("testing array", katzDeliLine);
  // console.log("testing length", katzDeliLine.length);
  return ("Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.");
  // returns the person's name in the statement above including their position in line.
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    // katzDeliLine.shift();
    return ("Currently serving " + katzDeliLine.shift() + ".");
    // katzDeliLine.shift();
  } else {
    return ("There is nobody waiting to be served!");
    }
 }

function currentLine (line) {
  // console.log("test line", line);


  if (line.length > 0) {
    console.log("we're here.", line);
    var lineWithNumber = [];
    for (var i = 0; i < line.length; i++) {
      console.log((i+1) + ". " + line[i]);
      lineWithNumber.push(" "+ (i+1) + ". " + line[i]);
      console.log("lineWithNumber", lineWithNumber);
    }

      return("The line is currently:" + lineWithNumber);

  } else {
    return ("The line is currently empty.");
  }
}
