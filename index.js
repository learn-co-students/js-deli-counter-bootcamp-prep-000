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
return console.log(katzDeliLine.shift())}

}else{console.log("There is nobody waiting to be served!")}
}