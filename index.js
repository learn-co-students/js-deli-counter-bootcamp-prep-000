var katzDeliLine = []

function takeANumber(katzDeliLine,name)
{
  
  katzDeliLine.push(name)
  return "Welcome, "+ name+". You are number "+ katzDeliLine.length
  + " in line."
  
}

function nowServing(katzDeliLine)
{
   if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
  }
  
  else
  {
  for(let i=0; i<katzDeliLine.length; i++)
  {
  

   return "Currently serving " +katzDeliLine.shift()+"."
   

   return "First person in line is " +katzDeliLine[i]
   katzDeliLine.shift()

  }
  
  }
  
 
}

function currentLine(katzDeliLine){
  

  var line =[];
  
  let i = 0;
  while (i < katzDeliLine.length) {
 line.push(` `+[i+1]+`. `  + katzDeliLine[i])
 i++;
 }
  
  if (katzDeliLine.length === 0) {
  return "The line is currently empty."
  }
  
  else{
  
   return "The line is currently:"+line;
   
  }
  

  
    if (katzDeliLine.length === 0) {
  return "The line is currently empty."
  }
  
  else
  {
  
   
   for(let i=0; i<katzDeliLine.length; i++)
  {
    
   return "The line is currently:"+(i+1)+"." + katzDeliLine[i];
   
  }
  
  
}


}