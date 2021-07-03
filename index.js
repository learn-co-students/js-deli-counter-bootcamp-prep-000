function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${parseInt(katzDeliLine.indexOf(name))+1} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  } else{
    var first = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${first}.`
  }
}

var line = [] 

function currentLine(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    line.push (` `+[i+1]+`. ` + katzDeliLine[i]);
    i++;
}
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.` }
  else {
    return `The line is currently:` + line;
  }
}
