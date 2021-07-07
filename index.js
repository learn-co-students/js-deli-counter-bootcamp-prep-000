//DONE Build a function that a new customer will use when entering the deli.

//DONE The function, takeANumber, should accept the current line of people, katzDeliLine, along with the new person's name as parameters. 

//DONE The function should return their position in line. 

//DONE And don't go being too programmer-y and give them their index. These are normal people. 

//DONE If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.



function takeANumber (katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//DONE Build a function nowServing. 

//DONE This function should return the first person in line and then remove that individual from the line. 

//DONE If there is nobody in line, it should return "There is nobody waiting to be served!"


  
function nowServing (katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  return "There is nobody waiting to be served!"
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



//DONE Build a function currentLine that returns the current line. 

//DONE For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace". 

//DONE If there is nobody in line, it should return "The line is currently empty."


  

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var s = "The line is currently:"
    var line = ''
    
    for ( var i = 0; i < katzDeliLine.length; ++i) {
      line = line + ` ${i+1}. ` + `${katzDeliLine[i]}` + `${i < katzDeliLine.length - 1 ? ',' : ''}` 
    }
    
    return s + line;
    
  } else {
    return "The line is currently empty."
  }
}


function currentLine(katzDeliLine) {
  var newKatzDeliLine = []
    if (katzDeliLine.length >=1) {
      newKatzDeliLine.unshift(`The line is currently: 1. ${katzDeliLine[0]}`)
      for (let i = 1; i < katzDeliLine.length; i++) {
        newKatzDeliLine.push(` ${i + 1}. ${katzDeliLine[i]}`)
        }
    } else {
      newKatzDeliLine.unshift('The line is currently empty.')
    }
  return newKatzDeliLine.join()
}





