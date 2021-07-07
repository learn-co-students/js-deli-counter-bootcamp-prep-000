
function takeANumber(currentLine,name) {
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLineList) {
  if (currentLineList.length===0) {
    return `There is nobody waiting to be served!`;
  }
  else {
    var servingNow=currentLineList[0];
    currentLineList.shift();
    return `Currently serving ${servingNow}.`;
  }
}
  
 function currentLine(line) {
   if (line.length===0) {
     return "The line is currently empty.";
   }
   else {
     var message="The line is currently:"
     for (var i=0;i<(line.length-1);i++) {
       message+=` ${i+1}. ${line[i]},`;
     }
     message+=` ${line.length}. ${line[line.length-1]}`;
     return message;
   }
 } 

