function takeANumber(a, b){
  a.push(b)
  return `Welcome, ${b}. You are number ${a.length} in line.`
}

 function nowServing(a){
   if (a.length===0){
     return "There is nobody waiting to be served!"
   } else {
     var b = a.shift()
   }
   return `Currently serving ${b}.`

 }

function currentLine(a){
  if (a.length === 0){
    return "The line is currently empty."
  } else {
    for (let i=0; i<a.length; i++){
      if (i ===0 ){
        a[i]= i+1 + ". " + a[i]
      } else {
        a[i]= ` ${i+1}. ${a[i]}`
      }
    }

    return `The line is currently: ${a}`
  }

}
