

var seansDeli = [];

function takeANumber(seansDeli, newPerson){
//return "their position in line, "Hello, newPerson. You are $(seansDeliLine) in line."
  var lineNum = seansDeli.length
  for (var i = 0; i <= lineNum; i++){
  seansDeli.push(newPerson)
  return "Welcome, " + newPerson + `. You are number ${lineNum + 1} in line.` 
  }
}


//Serve everyone in the line until 0. 

// var seansDeli = ['Mini', 'DG', 'Yuri', 'Sora', 'Kati']
// function nowServing(){
//   //var firstCus = seansDeli.shift();
//   for (var i = seansDeli.length; i > 0; i--){
//     console.log("Currently serving " + seansDeli[0] + ".");
//     seansDeli.shift()
//     if (seansDeli.length === 0){
//         console.log("There is nobody waiting to be served!")
//     }
//   }
// }


// function nowServing(seansDeli){
//   var que = seansDeli.length
//   var i = 0
//   while (i < seansDeli.length) {
//     i++;
//   }
//   if (que === 0) {
//     return "There is nobody waiting to be served!"
//   } else {
//     return `Currently serving ${seansDeli.shift()}.`
//     }
// }


function nowServing(seansDeli){
  var que = seansDeli.length
  for (var i = 0; i < que; i++) {
  }
  if (que === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${seansDeli.shift()}.`
    }
}

var newLine = [];

function currentLine(seansDeli){
  var queNum = seansDeli.length 
  for (var i = 0; i < queNum; i++){
    newLine.push(' '+ [i+1]+ '. ' + seansDeli[i])
  }
  if (queNum === 0) {
    return "The line is currently empty."
  } else {return "The line is currently:" + newLine}
}

  
  