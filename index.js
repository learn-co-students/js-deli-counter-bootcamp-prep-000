var katzDeli = []
function takeANumber(array, name){
  array.push(name);
  return  `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array){
  if(array.length > 0){
    var firstperson = array[0]
    array.shift()
    return `Currently serving ${firstperson}.`
    
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(array){
  if (array.length > 0){
    var output = [] 
    for (let i = 0; i < array.length; i++){
      var x = i + 1;
     output.push(` ${x}. ${array[i]}`)
      }
    return 'The line is currently:' + output.toString()
  } else {
    return "The line is currently empty."
  }
  
}