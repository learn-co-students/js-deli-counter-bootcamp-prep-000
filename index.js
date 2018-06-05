
function takeANumber(array, name){
  array.push(name)  
  return (`Welcome, ${name}. You are number ${array.length} in line.`)

}
var line = ["Steven", "Blake", "Avi"]
function takeANumber(array, name){
  array.push(name)  
  return (`Welcome, ${name}. You are number ${array.length} in line.`)

}
var line = ["Steven", "Blake", "Avi"]

function nowServing(line){
 if(line.length===0) {
   return ( "There is nobody waiting to be served!")
 } else { 
   
  return (`Currently serving ${line.shift(0)}.`)
 }
  
}


     
  function currentLine(line) {
    
    if (line.length===0){
      return ("The line is currently empty.")}
      const deliline = []
    for (let i = 0; i<line.length; i++){
      deliline.push(`${i+1}. ${line[i]}`)
    }
    
    return (`The line is currently: ${deliline.join(", ")}`)
    
    
    }
