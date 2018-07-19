let katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(`${name}`); return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}

function nowServing(katzDeli){
let customerindex = 0; while(customerindex < katzDeli.length){customerindex++} 
if (katzDeli.length === 0){
  return 'There is nobody waiting to be served!'}
  else return (`Currently serving ${katzDeli.shift()
  }.`)
}

function currentLine(katzDeli){
  let customerindex = 0; while(customerindex < katzDeli.length){customerindex++}
  let place = [customerindex]; while(place < [customerindex]){place++}
  if (katzDeli.length === 0){return 'The line is currently empty.'} else return (`The line is currently ${place}. ${katzDeli}`)
}