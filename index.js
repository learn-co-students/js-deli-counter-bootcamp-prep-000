
var katzDeliLine = [];
var counter = 0;

function takeANumber(katzDeliLine, name){
  var sent = '';
  if(counter < 1)
  {
    counter = katzDeliLine.length;
  }
    
  katzDeliLine.push(name);
  sent = "Welcome, " + name+". You are number "+(counter+1)+" in line."
  
  return sent
}

function currentLine(katzDeliLine){
  var line = 'The line is currently:';
  
  for(let i=0;i<katzDeliLine.length;i++)
  {
    if(i+1 === katzDeliLine.length)
    {
      line = line +" "+ (i+1-0) + ". " + katzDeliLine[i]  
    }else{
      line = line +" "+ (i+1-0) + ". " + katzDeliLine[i]+","
    }
      
  }
  if(katzDeliLine.length <= 0)
  {
    return "The line is currently empty."
  }
  return line
}

function nowServing(katzDeliLine) {
  //console.log(katzDeliLine);
  var name = katzDeliLine.splice(0,1);
  if(katzDeliLine.length !== 0)
  {
    //console.log("Currently serving " + katzDeliLine.splice(0,1));
    katzDeliLine.unshift();
  }
 else{
   return "There is nobody waiting to be served!";
 }
 return "Currently serving " + name+".";
}