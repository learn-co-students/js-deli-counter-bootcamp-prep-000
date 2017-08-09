function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing (line) {
  if (line.length<1){
    return 'There is nobody waiting to be served!'
  }  else {
    var current = line.shift ()
    return `Currently serving ${current}.`
  }
}
 function currentLine(line){
   if(line.length<1){
     return `The line is currently empty.`
   } else {
     let array = []
     for (let i=0; i<line.length; i++){
       array.push(`${i+1}. ${line[i]}`)
     }
  return `The line is currently: ${array.join(", ")}`
   }
 }
