function takeANumber(katzDeliLine,newPerson) {katzDeliLine.push(newPerson); return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(arr) {
    if (arr.length===0) {
             return "The line is currently empty."
    } else {var result = "The line is currently: ";
            for (let i=0;i<arr.length;i++)
            {result = result + `${i+1}` + ". " + `${arr[i]}`;
            if (i !== arr.length-1) {result=result + ", "}}
     return result
   }
}
