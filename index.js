var katzDeliLine =[];
function takeANumber(katzDeliLine, name){
 katzDeliLine.push(name);
 return "Welcome, " + name + "." + " You are number " + katzDeliLine.length + " in line."
}

  function nowServing(katzDeliLine){
    if(katzDeliLine.length>0){
      return 'Currently serving ' + katzDeliLine.shift() + '.';

    }
    else {
      return 'There is nobody waiting to be served!'
    }
  }

  function currentLine(katzDeliLine){
    if (katzDeliLine.length==0){
      return( "The line is currently empty.")
    }
      else{
      var newLine = " 1. " + katzDeliLine[0];
      var count =2;
      for (var i=1;i<katzDeliLine.length; i++) {
      newLine += ", " + count + ". " + katzDeliLine[i]
      count+=1;
      }
     return("The line is currently:" + newLine)
  ;
    }
}
