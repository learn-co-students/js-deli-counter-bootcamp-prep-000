 function p(value){
    console.log(value);
 }
 

var katzDeliLine = [];
const deliLine = ["Steven", "Blake", "Avi"]

deliLine.length

function takeANumber(number, name){
  number.push(name)
  return (`Welcome, ${name}. You are number ${parseInt(number.indexOf(name))+1} in line.`)
}


function nowServing(firstInLine){
  if (firstInLine.length === 0){
    return ("There is nobody waiting to be served!")
  }else{
     return(`Currently serving ${firstInLine.shift()}.`)
  }
}
// "The line is currently: 1. Ada, 2. Grace, 3. Kent"
function currentLine(line){
  if(line.length === 0){
    return ("The line is currently empty.")
  }else{
    var str = "The line is currently: "
    for (var o of line) {
      str += (`${parseInt(line.indexOf(o)+1)}. ${o}, `)
      
    }
    str = str.slice(0, -2);
    return (str)
  }
}

currentLine(deliLine)

