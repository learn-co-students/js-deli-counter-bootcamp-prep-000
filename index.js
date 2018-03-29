/*1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept the current line of people, `katzDeliLine`, along with the new person's name as parameters. The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.*/

var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);

  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name)+1) + " in line.";
}

/* 2. Build a function `nowServing`. This function should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"*/

function nowServing(katzDeliLine){
  var nextInLine = "";
  if (katzDeliLine.length <= 0){
    nextInLine += "There is nobody waiting to be served!";
  } else {
    nextInLine += "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
  }
  return nextInLine;
}

/*
3. Build a function `currentLine` that returns the current line. For example, if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  If there is nobody in line, it should return `"The line is currently empty."`*/

function currentLine(katzDeliLine){
  var mainLine = "The line is currently: " ;

  if (katzDeliLine.length > 0){
    for (var i = 0; i < katzDeliLine.length; i++){
      if (i === 0){
        mainLine += (i+1) + ". " + katzDeliLine[i];
      } else {
        mainLine += ", " + (i+1) + ". " + katzDeliLine[i];
      }
    }
    return mainLine;
  } else {
    return "The line is currently empty.";
  }
}

/*
### Hint

Example usage:

```javascript
var katzDeliLine = [];

takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "3"

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
```
*/
