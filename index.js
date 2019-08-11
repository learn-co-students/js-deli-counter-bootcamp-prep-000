// here we define the function take a number with 2 parameters
function takeANumber(people, name) {
// here we are adding the persons name to the people Array
people.push(name)
// here we return the persons name along with the length of the queue
  return `Welcome, ${name}. You are number ${people.length} in line.`
}

// creates new function nowServing with 1 parameter
function nowServing(people) {
// if statement checking length of array 
if ( people.length > 0 ) {
// creates variable to remove first person from array  
var shiftPerson = people.shift()
// this will run if the if statement is true and will return the string with the shifted persons name
return `Currently serving ${shiftPerson}.` }
// if above statement isn't true this will run and check length of people array
else ( people.length < 1 ); {
// when else statement is true and no one in line this will run
return "There is nobody waiting to be served!"
}
}

// creates currentline function
function currentLine(currentLineOfPeople){
 // creates empty array 'line'
 let line = [] ;
// if statement to return empty line if true
if(currentLineOfPeople.length < 1){
		return `The line is currently empty.`
	}
// for loop if line is more than 1 person then print name and place in queue
for(let i = 0; i < currentLineOfPeople.length; i++){
			line.push(`${i + 1}. ${currentLineOfPeople[i]}`)
	}
 return `The line is currently: ` + line.join(", ")
}