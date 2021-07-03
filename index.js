function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var index = katzDeliLine.indexOf(name) + 1;
  return(`Welcome, ${name}. You are number ${index} in line.`)
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var curr = katzDeliLine[0]
    katzDeliLine.shift()
    return(`Currently serving ${curr}.`)
  }else{
    return('There is nobody waiting to be served!')
  }
}

function currentLine(katzDeliLine){
  var loop = '';
    for(let i=0; i<katzDeliLine.length; i++){
      loop = loop + ` ${i+1}. ${katzDeliLine[i]}${i===katzDeliLine.length-1 ? '':','}`
    }
if(katzDeliLine.length > 0){
  return 'The line is currently:' + loop
} else {
  return('The line is currently empty.')
}


}

// for(let i=0; i<katzDeliLine.length; i++){
//   ${katzDeliLine[i]}
// }
