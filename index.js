var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name)
  var i = 0
  while (katzDeli[i] != name){
    i++
  }

  var string = `Welcome, ${name}. You are number ${i+1} in line.`
  return string
}

function nowServing(katzDeli){
  if (katzDeli.length > 0){
    return `Currently serving ${katzDeli.shift()}.`
  }else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeli){
  if (katzDeli.length > 0){
  var string = "The line is currently: "
  var space
  for (var i=0; katzDeli.length > i; i++){

    string += `${i+1}. `+katzDeli[i]+`${katzDeli.length === i+1 ? space = "" : space = ", "}`
  }
  return string
  }
  else{
    return 'The line is currently empty.'
  }

}
