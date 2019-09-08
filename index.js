var katzDeliline = []


function takeANumber(array, name){
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}


function nowServing(array){
  if (array.length === 0){
    return "There is nobody waiting to be served!"
  } else{
    var temp = array[0]
    array.shift()
    return `Currently serving ${temp}.`
  }
}



function currentLine(array){
  if (array.length === 0){
    return "The line is currently empty."
  } else {
    var result = "The line is currently: "
    
    for (var i = 0; i < array.length;i++){
      if (i === array.length-1){
        result += `${i+1}. ${array[i]}`
      } else{
        result += `${i+1}. ${array[i]}, `
      }
    }
   return result 
  }
}