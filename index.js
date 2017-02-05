let katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  let place = katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${place} in line.`;
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  } else {
    let beingServed = katzDeliLine.shift();
    return `Currently serving ${beingServed}.`
  }
}
function currentLine(line){
  if(line.length == 0){
    return 'The line is currently empty.'
  } else {
    let numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`;
  }


}
