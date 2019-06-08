var katzDeliLine = [];
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length >= 1){
    return `Currently serving ${katzDeliLine.shift()}.`;
  }else{
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine){
 var indexAndname = [];
  if (katzDeliLine.length >= 1){
 for(var i = 0; i<katzDeliLine.length;i++ ){
   if(i===0){
   indexAndname[i] = `${i+1}. ${katzDeliLine[i]}`;
   }else{
    indexAndname[i] = ` ${i+1}. ${katzDeliLine[i]}`;
   }
 }
 return 'The line is currently: '+indexAndname;
  }else{
    return 'The line is currently empty.'
  }
}
