function takeANumber(array, person){
  array.push(person)
  return `Welcome, ${person}. You are number ${array.length} in line.`
  if (array.length === 0){
    array.push(person)
    return `Welcome, ${person}. You are number ${array.length} in line. `
  }return array
}

function nowServing(array){
  var i = 0
  if(array.length === 0){
    return `There is nobody waiting to be served!`
  }else{
    var first = array[i]
    array.shift()
    return `Currently serving ${first}.`
    return array
  }
}

function currentLine(line){
  var space = " "
  if (line.length === 0){
    return `The line is currently empty.`
  }else{
    for (var i = 0; i < line.length; i++){
      line[i] = space + `${i+1}. ${line[i]}`
    }
  }return `The line is currently:${line}`
}
