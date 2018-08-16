//new array
var DeliLine=[]
//takes an array add new person 
function takeANumber(DeliLine,newPerson){
  DeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${DeliLine.length} in line.`
}
//remove first person in array
function nowServing(DeliLine){
  if(DeliLine.length===0){
    return `There is nobody waiting to be served!`
  }else{
   return `Currently serving ${DeliLine.shift()}.`
}
}
//creat a new array to store order string
function currentLine(DeliLine){
   var arr=[]
  DeliLine.forEach(function(item,index){
    arr.push(` `+(index+1)+`. `+item)
  })
// var i=0
// while(i<DeliLine.length){
//   arr.push(` `+(i+1)+`. `+DeliLine[i])
//   i++
//   }
  if(DeliLine.length===0){
    return `The line is currently empty.`
  }
  return `The line is currently:${arr}`
}