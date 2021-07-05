function takeANumber(katzDeliLine, name){
  return `Welcome, ${name}. You are number ${katzDeliLine.push(name)} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }

}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var lineNames = [];
    for (var i = 0; katzDeliLine.length > i ; i++) {

    // lineNames.push(i + ". " + katzDeliLine[i])
    lineNames.push(` ${i+1}. ${katzDeliLine[i]}`)
}
    return "The line is currently:" + lineNames
  }
}
//string interpolation is kind of like, the big thing here.
//the paramter will always represent the value thats passed in when the function is called
//I can call the parameter something diffe rent than what the test code calls the parameter.

//httpserver
//Sources tab
//Breakpoints
// "some stuff"
// 'some other stuff'
// `some ${evaluated} stuff
// lineNames = ["1. Steve", "2. John", "3. Jessica", ....]
