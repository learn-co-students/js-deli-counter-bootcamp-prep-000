function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine){
  if(deliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  var temp = deliLine[0]
  deliLine.shift()
  return `Currently serving ${temp}.`
}

function currentLine(line){
  if (line.length > 0){
    let str = "The line is currently: "
  for (let i = 0; i < line.length; i++){
    if(i === line.length - 1){ //no comma on the last one
          str += `${i+1}. ${line[i]}`
    }
    else{
          str += `${i+1}. ${line[i]}, `
    }
  }
  return str
  }
  else{
    return "The line is currently empty."
  }
}


//   describe('currentLine(line)', () => {
//     it('returns "The line is currently empty." if no one is in line', () => {
//       expect(currentLine([])).toEqual("The line is currently empty.");
//     });

//     it('says who is in line when there are people waiting', () => {
//       expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
//     });
//   });
// })
