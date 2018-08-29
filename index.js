/*global describe, it */

function takeANumber(lineNum, name){
  lineNum.push(name)
  
  //.push: add this element (new line number via name) to the deli array 
  
  return `Welcome, ${name}. You are number ${lineNum.length} in line.` 
  }

  // could have used:  return "Welcome, "+name+". You are number "+ lineNum.length + " in line."  VERSUS `Welcome, ${name}. You are number ${lineNum.length} in line.`  *placeholders look cleaner IMO*
  
  //.length reflects the number of elements in an array (Why does it not give 0 or 1 for each subsequent numerical (single characters) value? because .push(name) is adding elements the the end of the array and .length is outputting the number of elements in that array)

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  
  // (if the length of the line is 0 then say this stuff, if not, move to the next return line)
  }
  
  return `Currently serving ${katzDeliLine.shift()}.` 
}

  //.shift - Removes the first element from an array and returns that element. Which means: tell me the top element top person in line then remove them

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
    // if the line is empty say this stuff, if not true continue to next line 
  }
  return "The line is currently: 1. " + katzDeliLine[0] + ", 2. " + katzDeliLine[1] + ", 3. " + katzDeliLine[2]
}
// line 2 came from the test failure note, not the instructions
