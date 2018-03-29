var katzDeliLine=[];

function takeANumber(katzDeliLine,name){
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line){
 if( line.length===0){
   return "There is nobody waiting to be served!"
   }else{
     return `Currently serving ${line.shift()}.`
   }
}

function currentLine(line){
  if(line.length===0){
    return "The line is currently empty."
  }else{
    var newLine = [];
    line.forEach(function(item,index){newLine.push(` ${index+1}. ${item}`)} )
    return `The line is currently:${newLine}` 
  }
}