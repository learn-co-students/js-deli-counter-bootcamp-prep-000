
var katzDeliLine = [];

function takeANumber(array, name){
  array.push(name)
  return (`Welcome, ${name}. You are number ${array.length} in line.`)
}
 
function nowServing(array) {
  var empty = "There is nobody waiting to be served!"
  var message = []
    if (array.length > 0) {
    message =  `Currently serving ${array[0]}.`
    array.shift()
  } else {
    message = empty
  }
  return message
}
function currentLine(array) {
  var message2 = []
  if (array.length > 0) {
    var line = new Array()
    for (var i = 0; i < array.length; i++) {
      line.push(` ${i+1}. ${array[i]}`)
    }
    message2 = `The line is currently:${line}`
  } else {
    message2 = "The line is currently empty."
  }
  return message2
}

/*

beginning of the day, the deli is empty. represented by an empty var katzDeliLine = [];
*/
/*
function takeANumbers accept the current line of people, katzDeliLine with the new person's name as parameters function should return their position in line. (actual no array position) 
          use .push Name
          console.log (message + .length+1)
*/      
/*   
function nowServing.return the first person in line and then remove that individual from the line. nobody in line, it should return "There is nobody waiting to be served!"
          if statement 
            if >1 
            console.log [0]
            then .shift
          if = .length = 0
          console.log mensaje
*/ 
/*
function currentLine currentLine(katzDeliLine) "The line is currently: 1. Ada, 2. Grace" "The line is currently empty."
        
        if statement 
            if >1 
            var array made via 
            for loop
            then console.log(` ${array}`)
          if = .length = 0
          console.log mensaje
*/ 

