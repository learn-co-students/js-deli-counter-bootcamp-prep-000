var katzDeliLine = ["Steven", "Blake", "Avi"];
var newPersonName
var i=1
function takeANumber(katzDeliLine,newPersonName){

  console.log(`Welcome,${newPersonName}. You are number ${i} in line.`)
++i
 return katzDeliLine.push(newPersonName)
}
function nowServing(katzDeliLine){
if(katzDeliLine.length>0){
for(var i=0;i<katzDeliLine.length;i++){
var nowServingPerson= katzDeliLine.shift()
 console.log(nowServingPerson)
return nowServingPerson}
}else{return "There is nobody waiting to be served!"}
}
var katzDeliLine = ["Bill", "Jane", "Ann"];
function currentLine(katzDeliLine){
if(katzDeliLine.length>0){
for(var i=0;i<katzDeliLine.length;i++){
var currentLinePerson= katzDeliLine.shift()
 console.log(`The line is currently: ${i}. ${katzDeliLine[i]} , ${i+1}.${katzDeliLine[i+1]}`)
return katzDeliLine}
}else{return "The line is currently empty."}
}