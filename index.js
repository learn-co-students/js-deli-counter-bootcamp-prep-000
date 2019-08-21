
function takeANumber(deli, name){
deli.push(name);
return `Welcome, ${name}. You are number ${deli.indexOf(name) + 1} in line.`;
}

function nowServing(array){

  if(array.length === 0){
    return 'There is nobody waiting to be served!';
  }else{
    return `Currently serving ${array.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }

const number=[]

for(let i = 0, line = katzDeliLine.length; i < line; i++) {
  number.push(`${i + 1}. ${katzDeliLine[i]}`)
}
 return `The line is currently: ${number.join(', ')}`
}
