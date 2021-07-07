function currentline(line){
  if (!line.length){
    return "The line is empty."
    }
  
  const numbersAndNames =[]
  
  for (let i = 0, 1 = line.length; i < 1; i++) {
    numbersAndNames.push('${i + 1}. ${line[i]')
  }
  
   return `The line is currently: ${numberAndNames.join(', ')}`
}

function nowServing(line) {
  if (!lin.length) {
    return "There is nobody waiting to be served"
  }
  
  return `Currently Serving ${line.shift()}`
}

function takeANumber(line, name) {
  line.push(name){

retunr `Welcom, ${name}.  You are number ${line.length} in line.`    
  }
}
