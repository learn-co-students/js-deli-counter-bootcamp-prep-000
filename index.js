var katzDeli = []

function takeANumber(katzDeliLine, n){
  katzDeliLine.push(n)
  return ('Welcome, '+n+'. You are number ' +(katzDeliLine.length)+' in line.')
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return 'There is nobody waiting to be served!'
  }
  else{
    return ('Currently serving '+katzDeliLine.shift()+'.')
  }
}

function currentLine(katzDeliLine){
  var x = 'The line is currently:'
  if(katzDeliLine.length===0){
    return('The line is currently empty.')
  }
  else{
    for (var i=0;i<katzDeliLine.length;i++){
      x= x +' '+(i+1)+'. '+katzDeliLine[i]+','
    }
  }
  x=x.slice(0,x.length-1)
  return x
}