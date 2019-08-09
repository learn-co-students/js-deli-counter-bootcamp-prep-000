

function takeANumber(currentLineOfPeople, newPerson){
currentLineOfPeople.push(newPerson)
// console.log(currentLineOfPeople)
  return `Welcome, ${newPerson}. You are number ${currentLineOfPeople.length} in line.`
}

// console.log(katzDeliLine)

function nowServing(currentLineOfPeople){
if(currentLineOfPeople.length < 1){
  return "There is nobody waiting to be served!"
} else {
let shifted = currentLineOfPeople.shift()
return `Currently serving ${shifted}.`
}


}


function currentLine(currentLineOfPeople){
  let line = [] ;
	if(currentLineOfPeople.length < 1){
		return `The line is currently empty.`
	}
	for(let i = 0; i < currentLineOfPeople.length; i++){
			line.push(`${i + 1}. ${currentLineOfPeople[i]}`)
	}
 return `The line is currently: ` + line.join(", ")
}
