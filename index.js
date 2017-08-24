var katzDeli = [];


function takeANumber(katzDeliLine, name){

  katzDeliLine.push(`${name}`);

  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){

    return `Currently serving ${katzDeliLine.shift()}.`

  } else {

    return "There is nobody waiting to be served!"
  }

}

function currentLine(katzDeliLine){
 if (katzDeliLine.length === 0){
   return "The line is currently empty."

 }

      const numbersAndNames = [];

  for (let i = 0; i < katzDeliLine.length; i++){

    numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`)

}
return `The line is currently: ${numbersAndNames.join(', ')}`
}
