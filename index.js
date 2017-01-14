function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var name = katzDeliLine[0];
    katzDeliLine.shift()
    return `Currently serving ${name}.`
  }else {
    return 'There is nobody waiting to be served!'
  }

}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var arr = [];
    for(let i = 0 ; i < katzDeliLine.length; i++){
      arr.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently:${arr}`
  }else {
    return `The line is currently empty.`
  }
}
