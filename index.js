var katzDeliLine = [];


function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(i){
  if (i.length===0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = i[0]
    i.splice(0, 1)
    return "Currently serving " + name + "."
  }
}

function currentLine(j){
  var array = []
  if (j.length === 0){
    return "The line is currently empty."
  } else{
    for(let i = 0; i < j.length; i++){
      array += (i + 1) + ". " + j[i] + ", "
    }
    array = array.slice(0, array.length -2)
    return "The line is currently: " + array
  }
}
