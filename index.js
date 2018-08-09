function takeANumber(list, name){
  list.push(name)
  
 return `Welcome, ${name}. You are number ${list.length} in line.`
}

function currentLine(list){
  if (list.length > 0){
    var state = "The line is currently:"
    
    for (var i=0; i < list.length; i++){
      state += ` ${i+1}. ${list[i]}`
    
      if (i < list.length-1){
        state += ","
      }
    }
  }
  
  else{
    state = "The line is currently empty."
  }
  
  return state
}

function nowServing(list){
  if (list.length > 0){
    name = list[0]
    list.shift()
  
    return `Currently serving ${name}.`
  }
  else{
    return "There is nobody waiting to be served!"
  }
  
}