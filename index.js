var katzDeli = [];
var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length != 0)
  {
    var a = katzDeliLine.shift();
    return(`Currently serving ${a}.`);
  }
  else{
    return("There is nobody waiting to be served!");
  }
}
function currentLine(katzDeliLine) {
  var i=0;
  if(katzDeliLine.length != 0)
  {
    var lineString = "The line is currently: ";
    while(i<katzDeliLine.length){
      if(i===katzDeliLine.length-1) {
     lineString = lineString +(i+1)+"."+ " " +katzDeliLine[i];
     }
   else {
     lineString = lineString +(i+1)+"."+ " " +katzDeliLine[i] + "," + " ";
   }
   i++;
}
return(lineString);
}
else{
  return("The line is currently empty.");
}
}
