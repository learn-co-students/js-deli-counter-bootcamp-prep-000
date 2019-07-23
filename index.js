
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  
  var temp= "Welcome, "+katzDeliLine[katzDeliLine.length - 1]+". You are number "+ katzDeliLine.length + " in line."
  return temp
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0)
  {
    var temp = "Currently serving "+katzDeliLine[0]+"."
    katzDeliLine.shift()
  }
  else
  {
    temp="There is nobody waiting to be served!"
  }
return temp

}

function currentLine(katzDeliLine){
var array=[]
if (katzDeliLine.length > 0){
  for (var i=1; i<=katzDeliLine.length; i++){
    array.push(" "+i+ ". " + katzDeliLine[i-1])
    var temp = "The line is currently:"+array
  }}
  
else{
  array= " empty."
  temp = "The line is currently"+array;
}
  return temp
}