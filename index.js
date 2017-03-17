var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return 'Welcome, '+ name +'. You are number '+katzDeliLine.length+' in line.';

}
////////////////////////////////////////////////////////////
function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    return "Currently serving " + `${katzDeliLine.splice(0,1)}.`;
  }
}
//////////////////////////////////////////////////////////////

function currentLine(line){
  let i = 0;
  while(i < line.length){
    line[i] = " "+(i+1)+'. '+`${line[i]}`;
    i++;
  }if(line.length === 0){
return "The line is currently empty.";
 }
return 'The line is currently:' + line;;
}
