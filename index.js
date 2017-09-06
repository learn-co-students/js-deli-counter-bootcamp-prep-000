var katzDeli = [];

function takeANumber(arrLine,newName){
  arrLine.push(newName);
  return `Welcome, ${newName}. You are number ${arrLine.length} in line.`;
}

function nowServing(aLine){
  var next='';
  if (aLine.length>0){
    next=aLine.shift();
    return `Currently serving ${next}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(cLine){
  var line = "The line is currently";
  if (cLine.length==0){
    line +=" empty."
  } else {
    line += ":";
    var sep = '';
    for (var i=0; i<cLine.length; i++){
      line += `${sep} ${i+1}. ${cLine[i]}`;
      sep = ',';
    } //for
  } //line is not empty
  return line;
} // function
