var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
var katzDeli = katzDeliLine.splice(katzDeliLine.length, 0, name)
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
while (katzDeliLine.length > 0) { return `Currently serving ${katzDeliLine.shift()}.`}
return "There is nobody waiting to be served!"
}


function currentLine(katzDeliLine){
const arr = []
for (let i = 0; i < katzDeliLine.length; i ++)
{arr.push(`${i + 1}. ${katzDeliLine[i]}`)}
if (katzDeliLine.length > 0) {return `The line is currently: ${arr.join([', '])}`}
else {return "The line is currently empty."}

}
