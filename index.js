var katzDeliLine = [];


function takeANumber(katzDeliLine,name){
katzDeliLine.push(name)
return("Welcome, " +  name + "." + " You are number" + " " + (parseInt(katzDeliLine.indexOf(name))+ 1) + " in line.")


}
function nowServing (katzDeliLine){
  if(katzDeliLine.length > 0 ){
    return  "Currently serving " +  katzDeliLine.shift() + "."
  }
   return "There is nobody waiting to be served!"
  }

  function currentLine(katzDeliLine){
  	  if(katzDeliLine.length < 1){
  	  return "The line is currently empty."
  	  }
  	  var otherDeli = []
  	 for(var i=0; i < katzDeliLine.length; i++){


        otherDeli.push(i+1 + ". "+ katzDeliLine[i])
      }

  	  return  "The line is currently: " + otherDeli.join(', ')
      }
