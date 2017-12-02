function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name +". You are number "+ katzDeliLine.length +  " in line."
}
function nowServing(katzDeliLine){
if (katzDeliLine.length<1){
  return "There is nobody waiting to be served!"
}
  var currentPerson=katzDeliLine[0]
katzDeliLine.shift()
return "Currently serving "+currentPerson+"."
    }
function currentLine(katzDeliLine){
  if(katzDeliLine.length<1){
  return "The line is currently empty."
}
var statement="The line is currently: "
for (var i=0; i<katzDeliLine.length-1; i++){
  var place=i+1
  statement+= place +". "+ katzDeliLine[i]+ ", "
}
statement+=place+1+". "+katzDeliLine[i]
return statement
}
