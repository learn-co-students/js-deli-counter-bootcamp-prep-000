var katzDeliLine = [];
var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push (name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}
function nowServing(line){
  if (line.length===0){
    return "There is nobody waiting to be served!";
  } else {
    let first = line[0];
    line.shift();
    return `Currently serving ${first}.`;
  } 
}

/* 3. Build a function `currentLine` that returns the current line. For example, if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  If there is nobody in line, it should return `"The line is currently empty." */

function currentLine(line){
  var current = [];
  if (line.length>0) {
    for (let i=0; i<line.length;i++) {
      current.push(` ${i+1}. ${line[i]}`);
    } return (`The line is currently:${current}`);
    } else {
      return (`The line is currently empty.`);
    }
  }




/*old code below for reference
function takeANumber (katzDeliLine, name){
 katzDeliLine.push (name);
 var lineNumber = katzDeliLine.length
  return (`Welcome, ${name}. You are number ${lineNumber} in line.`)
}

function nowServing(deliName){
  var firstInLine = deliName[0]
  
  if (deliName.length > 0) {
    deliName.shift();
    return (`Currently serving ${firstInLine}.`);
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(x) {
    var line = []
    if (x.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < x.length; i++) {
        line += (i + 1) + ". " + x[i] + ", "
      }
      line = line.slice(0, line.length-2);
    return ("The line is currently: " + line);
    }
} 


function currentLine(line) {
 var lineIs = [];
  var len = line.length;
 if (!len) {
return ("The line is currently empty.")
  } else {
  for(let i=0; i<len; i++) {
   lineIs += (i + 1) + ". " + line[i] + ",";
}
 } 
  return ("The line is currently: " + lineIs)
}
 */