var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
    for (let i = 0; i < katzDeliLine.length; i++)

    if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`

      } else { (katzDeliLine.length < 1 )

      }
    return "There is nobody waiting to be served!"
  }

  function currentLine(katzDeliLine) {
      if(katzDeliLine.length <1) {
       return "The line is currently empty.";
      }
       //define a variable that is a string consisting of current line names
       var numbersJoinNames = [];

       for(let i = 0; i < katzDeliLine; i++) {
       numbersJoinNames.push(`${i + 1}. ${katzDeliLine[i]}`);
      }
      //this will be a string of the currentLine that includes the number combined
      //with names of people next-up-in-line. This will be a string and somehow
      //there must be a method or operator to join numbersJoinNames because
      return `The line is currently: ${numbersJoinNames.join(', ')}`
   };
