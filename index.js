function takeANumber(katzDeliLine,person){
  katzDeliLine.push(person);
  var n=katzDeliLine.indexOf(person)+1;

  var str=`Welcome, ${person}. You are number ${n} in line.`;

return str;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length==0)
  return "There is nobody waiting to be served!";
  else{
  var name=katzDeliLine.shift();
  return `Currently serving ${name}.`;
  }
}


function currentLine(katzDeliLine){
  if(katzDeliLine.length==0)
  return "The line is currently empty.";
  var str=`The line is currently:`;
  for(let i=1;i<=katzDeliLine.length;i++){
    str=str+` ${i}. ${katzDeliLine[i-1]},`;
  }
  return str.substr(0,str.length-1);
}