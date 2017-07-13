var katzDeli = [];

function takeANumber(katzDeli, name) {
    katzDeli.push(name)
      return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
    var nextPerson = katzDeli.shift()
      return nextPerson ? `Currently serving ${nextPerson}.` : "There is nobody waiting to be served!"
}

function currentLine(katzDeli) {
   if (katzDeli.length === 0) {
     return "The line is currently empty."
   } else {
     var sentence = "The line is currently: ";
     for (var i = 0; i < katzDeli.length; i++) {
       debugger
       sentence+=`${i+1}. ${katzDeli[i]}, `
     };
     var finalSentence = sentence.slice(0,-2)
     return finalSentence
}
