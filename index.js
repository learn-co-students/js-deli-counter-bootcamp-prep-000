function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(array){
  if (array = []) {
    return `There is nobody waiting to be served!`
  }
  else {
    return `Currently serving ${array[0]}.`;
    array.shift;
  }
}
