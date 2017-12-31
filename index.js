var katzDeliLine;

function takeANumber(katzDeliLine,newLiner){
  katzDeliLine.push(newLiner);
  return "Welcome, "+newLiner+". You are number "+(katzDeliLine.length)+" in line.";}

function nowServing(katzDeliLine){
  let upNext="";
  if (typeof(katzDeliLine[0])!=="string")
  {return "There is nobody waiting to be served!";}
  else upNext=katzDeliLine.shift();
  return "Currently serving "+upNext+".";}
  
function currentLine(katzDeliLine){
  let result="The line is currently: ";
  if (typeof(katzDeliLine[0])!=="string"){return "The line is currently empty."}
  else for (var i=0;i<katzDeliLine.length;i++){
    if (i===katzDeliLine.length-1)
    {result+=(i+1)+". "+katzDeliLine[i];}
    else result+=(i+1)+". "+katzDeliLine[i]+', ';}
    return result;
}