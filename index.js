
function takeANumber(katzDeliLine,newPerson){
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`

}
function currentLine(katzDeliLine){
  if (katzDeliLine.length===0)
      {return "The line is currently empty."}
  var r = "The line is currently:"
  for(var i = 0 ;i< katzDeliLine.length; i++)
  {
    if (i===katzDeliLine.length-1)
    ( r = r + ` ${i+1}. ${katzDeliLine[i]}`)
    else
    (r = r + ` ${i+1}. ${katzDeliLine[i]},`)
  }
  return r;
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length===0)
      {return "There is nobody waiting to be served!"}
  var i = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${i}.`
  
      
  
}