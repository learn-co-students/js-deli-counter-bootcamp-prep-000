

function takeANumber(array, name) {
  array.push(name);
  var position = array.indexOf(name) + 1 ;
  var welcomeMessage 
  = `Welcome, ${name}. You are number ${position} in line.` ; 
  console.log(welcomeMessage);
  // Print Current Line 
  console.log(array); 
  return welcomeMessage ; 
}


function nowServing(array) {
  
  if(array.length < 1 || array == undefined) {
  var nowServingMessage = "There is nobody waiting to be served!";
  console.log(nowServingMessage) ;
  } else {
  var nowServingMessage = `Currently serving ${array[0]}.` ;
  array.shift() ; // Remove the First Person
  console.log(nowServingMessage);
  
  }
  
  return nowServingMessage ; 
  
}


function currentLine(array) {
    if(array.length < 1 || array == undefined)  {
       return "The line is currently empty." ; 
    } else {
      var FinalLine = [] ;
      for (let i=0;i<array.length;i++) {
      FinalLine.push(`${i + 1}. ${array[i]}`)
      }
     return `The line is currently: ${FinalLine.join(", ")}` ; 
    }
}

