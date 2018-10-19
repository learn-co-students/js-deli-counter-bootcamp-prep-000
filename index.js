//1) takeANumber()
function takeANumber(numArray, name) {
  
  numArray.push(name);
  return `Welcome, ${name}. You are number ${numArray.length} in line.`;
  
}



//2) nowServing()
function nowServing(katzDeliLine) {
  
  if (katzDeliLine[0]) {
    let first = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${first}.`;
  }
  
  return "There is nobody waiting to be served!";
  
}



//3) currentLine()
function currentLine(numArray) {
  
  var duplicateArray = numArray.slice();
  var string = "The line is currently: ";
  var index = 1;
  
  //If theres something in the array
  if (numArray[0]) {
    
    //while there is a first item in the array
    while ( duplicateArray[0] ) {
      
      //Add the current number and name to the string
      string += `${index}. ${numArray[index-1]}`;
      
      //If there is another entry rught after this one, add a comma and space
      if (numArray[index]) {
        
        string += ", ";
        
      }
      
      //Jetzt lösche den ersten Eintrag
      duplicateArray.shift();
      index += 1;
      
    }
    
    return string;
  }
  
  //If teh array doesn't exist...
  return "The line is currently empty."
  
}