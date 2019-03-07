function takeANumber(line, person){
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(!line.length){
    return 'There is nobody waiting to be served!'
  }
  else{
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line){
  if(!line.length){
      return 'The line is currently empty.'
    }
    else{
      var string = "The line is currently: "
      for(var i = 0; i < line.length; i++){
        if(line.length !== i + 1){
          string = string + `${i + 1}. ${line[i]}, `
        }
        else{
          string = string + `${i + 1}. ${line[i]}`
        }
      }
      return string
    }
  }

var deli= ["Jason", "Freddy", "Michael Meyers"]
console.log(currentLine(deli))
