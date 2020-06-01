function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

/* Original code
function nowServing(katzDeliLine){
   if (katzDeliLine.length>0) {
   return (`Currently serving ${katzDeliLine[0]}.`)}
   katzDeliLine.shift
  else {return "There is nobody waiting to be served!"}
 }
*/


/* works using a vairable
function nowServing(katzDeliLine){
   
   if (katzDeliLine.length>0) {
   var firstPerson=katzDeliLine.shift() ;
   return (`Currently serving ${firstPerson}.`)}
  else {return "There is nobody waiting to be served!"}
 }
*/
 
 function nowServing(katzDeliLine){
   if (katzDeliLine.length>0) {
   return (`Currently serving ${katzDeliLine.shift()}.`)}
  else {return "There is nobody waiting to be served!"}
 }
 /* can also be written with concat:
 return ("Currently serving " + katzDeliLine.shift +"."")}
 */
 
 /* Original function ending at return, won't continue looping
 
 function currentLine(katzDeliLine){
  for (let i=0; i<katzDeliLine.length; i+=1)
  if (katzDeliLine.length>0) {
    var position= i 
    var name= katzDeliLine[i]
     return`The line is currently: ${position + 1}. ${name},`
  }
  else {
    return "The line is currently empty."
  }
}*/

function currentLine(katzDeliLine){
  var nameAndPosition= []
  for (let i=0; i<katzDeliLine.length; i+=1) {
    var position=i
    var name= katzDeliLine[i]
    nameAndPosition.push (` ${position+1}. ${name}`)
  }
  if (katzDeliLine.length>0) {
  return `The line is currently:${nameAndPosition}`}
  else {
    return "The line is currently empty."
  }
}