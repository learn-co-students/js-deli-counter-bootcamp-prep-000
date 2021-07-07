function takeANumber(deliLine, name) {
  deliLine.push(name)
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine){
if (deliLine.length === 0){
  return "There is nobody waiting to be served!";
}else{
  var shifted = deliLine.shift();
  return `Currently serving ${shifted}.`
}
}


function currentLine(y){
  var comment = "The line is currently:"
  if (y.length === 0){
    return "The line is currently empty."
  }else{
    var i = 1
    for (var x = 0; x < y.length; x++){
      comment += ` ${i}. ${y[x]}`
      if (i !== y.length){
        comment += ","
        i++
      }
    }
  }
  return comment
}