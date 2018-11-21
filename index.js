const takeANumber = (katzDeli, customerName) => {
  katzDeli.push(customerName)
  return `Welcome, ${customerName}. You are number ${katzDeli.length} in line.`
}

const nowServing = (katzDeli) => {
  if(katzDeli.length === 0){
    return `There is nobody waiting to be served!`
  }else{
    return `Currently serving ${katzDeli.shift()}.`
  }
}

 const currentLine = (katzDeli) => {
  var line=[]
   if(katzDeli.length === 0){
     return `The line is currently empty.`
   }else{
    for(let i = 0; i < katzDeli.length; i++){
       line.push(` ${[i+1]}. ${katzDeli[i]}`)
     }
     return `The line is currently:${line}`
   }
}