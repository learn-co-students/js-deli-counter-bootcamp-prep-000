// var katzDeliLine = [];

// function takeANumber(katzDeliLine, person){
  
  
// //     katzDeliLine.push(person)
// //   return  `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
// // }



// // function nowServing(katzDeliLine){
// //   if(katzDeliLine.length < 1){
// //     return "There is nobody waiting to be served!"
// //   } else {
// //     return `Currently serving ${katzDeliLine.shift()}.`
// //   }
// // }


// // function 

var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing(line){
  if(line.length > 0){
    let removedPerson = line.shift();
    return `Currently serving ${removedPerson}.`;
  } else{
    return `There is nobody waiting to be served!`;
  }
} 

// function currentLine(line){
//   if(line.length > 0){
//     let nameAndLine = []
//     for(let i = 0; i < line.length; i++){
//       nameAndLine.push( ` ${i + 1}. ${line[i]}` )
//     }
//     return `The line is currently:${nameAndLine}`
//   }
//     return `The line is currently empty.`
// }



function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0; i < line.length; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};







