var katzDeli=[];

function takeANumber(katzDeliLine,name){
  var position=katzDeliLine.length+1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
    var firstPerson=katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  var message=[];
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  for(var i = 0; i<katzDeliLine.length;i++){
    message.push(` ${i+1}. ${katzDeliLine[i]}`);
 }
  return "The line is currently:"+message;
 }
