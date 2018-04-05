var katzDeliLine = [];



function takeANumber(katzDeliLine,name)
{

  katzDeliLine.push(name)
  
  return "Welcome, " + name + ". " + "You are number " + katzDeliLine.length + " in line."
    
}
  
function nowServing(katzDeliLine)
{
   var spot = []
 if(katzDeliLine.length === 0) 
  {
     return  "There is nobody waiting to be served!"
    
   }
 else
 {
   spot = katzDeliLine.shift()
   
    return "Currently serving " + spot + "."
       
    }
    
  }
 
  function currentLine(katzDeliLine)
  {
      var spot = []
      var i = 0;
    while(i < katzDeliLine.length)
     {
      spot.push(" "+[i+1]+ ". "+ katzDeliLine[i]   )
      //return "The line is currently:" +" " + i + ". " + spot + ", "
      
        i++
     }
     
     if(katzDeliLine.length === 0) 
     {
       return  "The line is currently empty."
    
     }
     
     else
     return  "The line is currently:" + spot +""
  
  }
  
 
  