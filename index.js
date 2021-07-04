function takeANumber(ppl,name){
 
  ppl.push(name);
  var msg = ("Welcome, " + name + ". You are number " + ppl.length + " in line.");
return msg;
}


function nowServing(katzDeliLine){
if (katzDeliLine.length === 0){

return  "There is nobody waiting to be served!";

}

else {
  var cur1 = "Currently serving " + katzDeliLine[0] + ".";
  katzDeliLine.shift();
  return cur1;
}
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0){
    var newstr = "";
    for (var i = 0; i < katzDeliLine.length;i++){
      newstr = newstr + (i+1+". ") + katzDeliLine[i] + ", ";
    }
      newstr = newstr.slice(0,-2);
      return "The line is currently: " +  newstr ;  
  }
  else{
     return "The line is currently empty.";
  }
  
}
