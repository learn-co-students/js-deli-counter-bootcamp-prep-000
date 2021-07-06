/*global describe, it */

function takeANumber(lineNum, name){
  lineNum.push(name)
  
  //.push: add this element (new line number and name) to the end of the deli array 
  
  return `Welcome, ${name}. You are number ${lineNum.length} in line.` 
  }
  
  // could have used:  return "Welcome, "+name+". You are number "+ lineNum.length + " in line."  VERSUS  the line above  *placeholders look cleaner IMO*
  
  //.length reflects the number of elements in an array (Why does it not give 0 or 1 for each subsequent numerical (single characters) value? because .push(name) is adding elements the the end of the array and .length is outputting the number of elements in that array)

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  
  // (if the length of the line is 0 then say this stuff, if not, move to the next return line)
  }
  
  return `Currently serving ${katzDeliLine.shift()}.` 
  
}

  //.shift - Removes the first element from an array and returns that element. Which means: then remove the top person in line and tell me what it is

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  
  var myString = "The line is currently:"
  for(var i = 0; i < katzDeliLine.length; i++) {
    var currentNum = i+1 //cuz the index starts with 0 so start at 1
   
    //myString += (" " + currentNum + ". " + katzDeliLine[i] + ",")
   
    myString += ` ${currentNum}. ${katzDeliLine[i]},`
    
   }
  
  return myString.slice(0, -1); //remove the last character of the entire string (,)
  
  //"The line is currently: 1. " + katzDeliLine[0] + ", 2. " + katzDeliLine[1] + ", 3. " + katzDeliLine[2] 
  //the above would work for this lab, but what if there are more than 3 people in line?
}