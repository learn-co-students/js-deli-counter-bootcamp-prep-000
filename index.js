function takeANumber (katzDeli, name){
  katzDeli.push(name)
  var position=katzDeli.length
  return (`Welcome, ${name}. You are number ${position} in line.`)
}

var line=[]
console.log(takeANumber(line, "Ada"))

function nowServing(katzDeliLine){
  var peopleInLine=katzDeliLine.length
  if (peopleInLine>0){
       return `Currently serving ${katzDeliLine.shift()}.`
      }
  else {return "There is nobody waiting to be served!"}
}

var katzDeliLine=["Ada", "Grace"]
console.log(nowServing(katzDeliLine))

function currentLine(katzDeliLine){
    var string="The line is currently: "
       if (katzDeliLine.length===0){return "The line is currently empty."}
       else {
         for (var i=0; i<katzDeliLine.length; i++){
           var newPersonInLine=+(i+1) +". "+katzDeliLine[i]+", ";
           string+=newPersonInLine
         }
         
         return string.slice(0,string.length-2)
        }
     }

console.log(currentLine(katzDeliLine))