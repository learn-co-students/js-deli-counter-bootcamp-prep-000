var katzDeliLine = [];

takeAnumber (katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");

nowServing (katzDeliLine);

currentLine (katzDeliLine);

function takeANumber (katzDeliLine, name){

 katzDeliLine.push(name);
 return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");


}

function nowServing (katzDeliLine){
if (katzDeliLine.length === 0) {
return ("There is nobody waiting to be served!");
}
else {
var front = katzDeliLine[0];
katzDeliLine.shift();
return ("Currently serving " + front + ".");
}
}

function currentLine (katzDeliLine){
  if (katzDeliLine.length === 0){
    return ("The line is currently empty.");
  }
  else{
    var deliline = [];
    var i;
    for (i = 0; i < katzDeliLine.length; i++){
      var n = i+1;
      if (i===0){
      deliline.push(n + ". " + katzDeliLine[i]);  
      }
      else{
       deliline.push(" " + n + ". " + katzDeliLine[i]);
      }
      
    }
    
    return ("The line is currently: " + deliline);
  }
}