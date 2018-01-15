var katzDeli = []
function takeANumber(katzDeli, name) {
katzDeli.push(`${name}`);
return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzdeli){
  if (katzdeli.length===0){
    return("There is nobody waiting to be served!")
  } else {
    return (`Currently serving ${katzdeli.shift()}.`)
  }
}

function currentLine(katzdeli){

  var list = `The line is currently: 1. ${katzdeli[0]}`
   for(var i = 1; katzdeli.length>i;i++){list +=`, ${i+1}. ${katzdeli[i]}`
   }
  if (katzdeli.length===0){
    return("The line is currently empty.")
  } else {
    return(`${list}`)
}
}