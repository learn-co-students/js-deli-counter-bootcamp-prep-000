var katzDeliLine = [];

/* 
1. Declare a function named takeANumber.
2. Function accepts 2 parameters named katzDeliLine & name, whose values are number and string. 
3. When call function, return position in line.
*/
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  //return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

/* 
1. Declare a function named nowServing.
2. Function accepts parameter named katzDeliLine, whose value is an array.
3. Return the first person in line and then remove that individual from the line. 
4. If there is nobody in line, it should return "There is nobody waiting to be served!"
*/
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0, 1);
    return `Currently serving ${name}.`;
  }
}

/* 
1. Declare a function named currentLine.
2. Function accepts parameter named katzDeliLine, whose value is an array.
3. When call function, returns the current line.
*/
function currentLine(katzDeliLine) {
    katzDeliLine = [];
    if (katzDeliLine.length === 0) {
      return "The line is currently empty.";
    } else {
      for(var i = 0; i < katzDeliLine.length; i++) {
        katzDeliLine += (i + 1) + ". " + katzDeliLine[i] + ", ";
      }
      katzDeliLine = katzDeliLine.slice(0, katzDeliLine.length-2);
      return "The line is currently: " + katzDeliLine;
    }
}
