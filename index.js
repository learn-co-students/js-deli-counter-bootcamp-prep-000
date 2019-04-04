function takeANumber (line, name){
  line.push(name)
  return`Welcome, ${name}. You are number ${line.length} in line.`
}
//Function takeANumber accepts a name(to be aded to the line) and array
//(representing a list of people currently in line), appends the name to the
//array  and returns a formatted  greeting string with the persons name and
//place in line. 

function nowServing (line){
  if(line.length > 0){
    var serving = line[0]
    line.shift()
    return `Currently serving ${serving}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}
//function takes line , removes the first person in line and returns
//the name and number of the first person in line. It returns
//"There is nobody waiting to be served!" if there is no one in line.

function currentLine(line){
  var newList = []
  if (line.length===0){
    return "The line is currently empty.";
  }for(var i =0; i<line.length; i++){
      newList.push(` ${i+1}. ${line[i]}`)
    }
  return `The line is currently:${newList}`
}
// function takes input line array and returns the numbers
//and names of those in the line in order. If the line is empty the function
//'returns the line is currently empty'
