function takeANumber (line,name){
  line.push(name);
  return (`Welcome, ${name}. You are number ${line.length} in line.`);
}

function nowServing(katzDeliLine){
 if(katzDeliLine.length>0){
   var first=katzDeliLine.shift()
   return "Currently serving " + first + "."
 }else{
   return "There is nobody waiting to be served!";
 } 
}

function currentLine(line){
  if(line.length===0){
    return "The line is currently empty.";
  }else
    var newLine = [];
    for(var i=0; i<line.length; i++){
      newLine.push(` ${i+1}. ${line[i]}`)
    }return "The line is currently:" + newLine
  }