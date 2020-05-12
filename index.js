  
var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
var a = takeANumber(katzDeliLine,"Ada")
var b = takeANumber(katzDeliLine, "Grace");
var c =takeANumber(katzDeliLine, "Kent");
console.log(a)
console.log(b)
console.log(c)


function nowServing(katzDeliLine) {
  if (katzDeliLine[0] !== undefined) {return `Currently serving ${katzDeliLine.splice(0,1)}.`;
  } else { return "There is nobody waiting to be served!";}
}
var d = nowServing(katzDeliLine)
console.log(d)

function currentLine(katzDeliLine) {
  var array = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      array.push(` `+[i+1]+`. ` + katzDeliLine[i])
    }
  }
  return "The line is currently:" + array
}
var e = currentLine(katzDeliLine)
console.log(e)

var f = takeANumber(katzDeliLine,"Matz")
console.log(f)

var g = currentLine(katzDeliLine)
console.log(g)

var h = nowServing(katzDeliLine)
console.log(h)

var i = currentLine(katzDeliLine)
console.log(i)