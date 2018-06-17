var katzDeli = [];

function takeANumber(katzDeli, customerName){
  //Returns customers position in katzDeliLine
  // Example:
  //  "Welcome, Ada.  You are number 1 in line."
  //      **Do not return index ** 
  katzDeli.push(customerName);
  var arrayLength = katzDeli.length;
  var string = [];
  var cNum = arrayLength.toString();
  string = "Welcome, " + customerName + ". You are number " + cNum + " in line.";
      
  return string;
}

function nowServing(katzDeli){
  // Returns the first person in line "Now Serving name"
  // Removes the person from the line
  // If line empty, returns "There is nobody waiting to be served!"
  var arrayLength = katzDeli.length;
  var emptyString = "There is nobody waiting to be served!";
  var firstString = "Currently serving ";
  if (arrayLength === 0){
    return emptyString;
  }
  else{
    firstString = firstString + katzDeli[0] + ".";
    katzDeli.shift();
    return firstString;
  }
}

function currentLine(katzDeli){
  //Returns the current line.
  // Example:
  //   If katzDeli = ["Ada", "Grace"]
  //   Then: "The line is currently: 1. Ada, 2. Grace"
  
  var i = 0;
  var tempString = "The line is currently: ";
  var emptyString = "The line is currently empty.";
  var arrayLength = katzDeli.length;
  var tempArray = [];
  var string1, string2;
  tempArray = katzDeli.slice(0);
  
  if (arrayLength === 0){
    return emptyString;
  }
  else{
    while (i < arrayLength){
      string1 = i+1;
      string2 = tempArray[i];
      if (arrayLength != i+1){
        tempString = tempString + string1 + ". " + string2 + ", ";
      }
      else{
        tempString = tempString  + string1 + ". " + string2;
      }
      i++;
    }
    return tempString;
  }
    
}