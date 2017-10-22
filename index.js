var katzDeli = []
var katzDeliLine =[]
function takeANumber(katzDeliLine,person){
  katzDeliLine.push(person)
  return ("Welcome, "+person+". You are number "+katzDeliLine.length+" in line.")
}

function nowServing(katzDeliLine){

  if (katzDeliLine.length > 0){
    var name = katzDeliLine[0]
    katzDeliLine.shift()
    return ("Currently serving "+ name +".")
    }
   else {
    return "There is nobody waiting to be served!"
   }
}
function currentLine(katzDeliLine) {

  if (katzDeliLine.length >0){
    var  lines=""
    for(let i=0 ; i<= katzDeliLine.length-1; i++){
      if (i==0){
        lines="The line is currently: "+(i+1)+". "+katzDeliLine[i]
      }else{
      lines =lines +", "+(i+1)+". "+katzDeliLine[i]
      }
    }
    return lines
  }else {
    return "The line is currently empty."
  }

}
