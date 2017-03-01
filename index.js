function takeANumber(katzDeliLine,name) {
if (katzDeliLine.length === 0){
  katzDeliLine.push(name);
return(`Welcome, ${name}. You are number 1 in line.`);
} else{
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length ===0){
    return 'There is nobody waiting to be served!';
  }else {
    var currentlyServing = katzDeliLine.slice(0,1);
    katzDeliLine.shift();
    return `Currently serving ${currentlyServing}.`;
  }
}
function currentLine(line){
  if (!line.length){
    return 'The line is currently empty.'
  }
  const namesAndNumbers = []
  for (let i = 0, l=line.length; i< l; i++){
    namesAndNumbers.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${namesAndNumbers.join(', ')}`
}