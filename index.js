var katzDeli = [];

function takeANumber(line,name){
line.push(name)
var lineLength= line.length
return `Welcome, ${name}. You are number ${lineLength} in line.`
}

function nowServing(line) {
  var oldLine= line.slice(0)
  line.shift()
  if (oldLine.length>0) {return `Currently serving ${oldLine[0]}.`} else {return "There is nobody waiting to be served!"}

}

function currentLine(line) {
  var numberedLine=[]
  var n=1
  for (var i=0;i<=line.length-1;i++) {
    numberedLine.push(` ${n++}. ${line[i]}`)
  }
  if (line.length<=0) {return "The line is currently empty."} else {
    return `The line is currently:${numberedLine}`
  }
}
