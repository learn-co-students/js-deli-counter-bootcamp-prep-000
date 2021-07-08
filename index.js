function takeANumber(currentLine, newName){
  currentLine.push(newName);
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`;
  }



/*2. Build a function `nowServing`. This function should accept the current line of people (`katzDeliLine`) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"
*/



function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
  return "There is nobody waiting to be served!"
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0,1);
  }
  return "Currently serving " + name + '.' ;
  }


function currentLine(line){
  if(line.length === 0) {
  return "The line is currently empty."
} else {
  var i = []
  for(i = 0; i < line.length; i++) {
  line += (i+1) + line[i] + ",";
  line = slice(0, line.length-2)
  }
  return "The line is currently: " + line
    }
}



/*

function takeANumber(currentLine, newPersonName){
  currentLine.push(newPersonName);
  return `Welcome, ${newPersonName}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine){
if(katzDeliLine.length === 0){
  var i= `Currently serving ${katzDeliLine[0]}.`; 
  katzDeliLine.shift();
  return i;
}
else{
  return "There is nobody waiting to be served!";
}
}

function currentLine(line){
  if(katzDeliLine.length === 0 ){
  return "The line is currently empty."}
  else{
    var line = "The line is currently:";
    katzDeliLine.forEach(function(val,index){
      line += '${index+1}. ${katzDeliLine[index]}';
      {
        if(index < katzDeliLine.length - 1){
          line += ',' ; }
       }
      }
  }
}

*/