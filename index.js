
var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
return`Welcome,${name}.You are number ${katzDeliLine.length} in line.`;
}


function nowServing(katzDeliLine
){
  if(katzDeliLine.length>0){
  var output=`Currently serving ${katzDeliLine[0]}`;
 katzDeliLine.shift();
 return output;
  }
  else if(katzDeliLine.length===0){
    return `There is nobody waiting to be served!`;}
}
function currentLine(){
  if(katzDeliLine.length>0){
       var array = [];
  for(var i=0;i<katzDeliLine.length;i++){
  array.push((i++)+"."+katzDeliLine[i]);
  }
    return`The line is currently:${array}`; }
    else if(katzDeliLine.length===0){
    return `The line is currently empty.`;}
}

