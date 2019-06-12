

function takeANumber(lineArray, name) { 
  var number = lineArray.push(name);

//  return "Welcome, " + name + ". You are number "+ number + " in line.";
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(lineArray) {
//  var theServed;
  
//  if (lineArray.length > 0) {
//       theServed = lineArray.shift();
//        return `Currently serving ${theServed}.`;
//  }
//  else return "There is nobody waiting to be served!";

  return (lineArray.length > 0 ? `Currently serving ${lineArray.shift()}.` : "There is nobody waiting to be served!");
}

function currentLine(lineArray) {
  var i;
  var theList = "The line is currently";

  if (lineArray.length === 0) {               
      return theList += " empty.";
  }
  
//  else {
//    theList += ": "; 
//    for (i = 0; i < lineArray.length ; i++) {
//      theList += `${i+1}. ${lineArray[i]}`;
//      if (i < (lineArray.length-1)) {
//       theList += ", ";
//      }
//    }

  else {
    theList += ": "; 
    for (i = 0; i < lineArray.length ; i++) {
      theList += (i < lineArray.length-1) ?     // if its not the last name
              `${i+1}. ${lineArray[i]}, ` :     // add a comma and a space or 
              `${i+1}. ${lineArray[i]}`;        // if last name, leave out.
    }
    return theList;
  }
}


