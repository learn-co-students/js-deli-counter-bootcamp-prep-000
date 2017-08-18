var katzDeli = []

function takeANumber(array, next){
  array.push(next)
  return `Welcome, ${next}. You are number ${array.length} in line.`
}

function nowServing(array) {
  if (array.length === 0){
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${array.shift()}.`
  }
}

function currentLine(array){
  if (array.length === 0){
    return "The line is currently empty."
  } else{
    var statement = 'The line is currently:'
    for (var i in array){
      var pos = Number(i) + 1
      statement += ` ${pos}. ${array[i]},`
    }
    statement = statement.slice(0, -1)
    return statement
  }
}
