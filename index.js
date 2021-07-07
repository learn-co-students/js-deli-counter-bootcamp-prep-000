var katzDeli = []
var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    for (var i=1; i<katzDeliLine.length; i++){
}
return "Welcome, " +name+ ". You are number " +i+ " in line."

}

function nowServing(katzDeliLine) {
if (katzDeliLine.length<1) {
  return "There is nobody waiting to be served!"
} else {
return "Currently serving " +katzDeliLine.shift()+ "."
}
}

function currentLine(katzDeliLine) {
if (katzDeliLine.length<1) {
return "The line is currently empty."
} else { 
var i=0
var newArray = []
while (i<katzDeliLine.length){
    newArray.push(i+1 +". "+ katzDeliLine[i])
    i++
}
return "The line is currently: " + newArray.join(", ")

}
}