function takeANumber(katzDeli, name){
  katzDeli.push(name)
  let message = ''
  for(let i=0; i< katzDeli.length ; ++i){
    message = `Welcome, ${katzDeli[i]}. You are number ${i+1} in line.`
  }
  return message
}
//var katzDeli = [] en 'globale'
//takeANumber([], "Teddy") "Welcome, Teddy. You are number 1 in line."
//takeANumber(["Teddy"], "Ada") "Welcome, Ada. You are number 2 in line."

function nowServing(katzDeli){
  if(katzDeli.length === 0) return "There is nobody waiting to be served!"

  const message = `Currently serving ${katzDeli[0]}.`
  katzDeli.shift() //console.log(katzDeli)
  return message
}

function currentLine(katzDeli){
  if(katzDeli.length === 0) return "The line is currently empty."
  let message = 'The line is currently: '
  for(let i=0; i< katzDeli.length ; ++i){
    // if(i == katzDeli.length-1) {
		// message += `${i+1}. ${katzDeli[i]}`
		// break
    // }
	message += `${i+1}. ${katzDeli[i]}, `
  }
  return message.slice(0, message.length-2)
}
