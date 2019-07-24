/*1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept two paramaters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as `"Welcome, Ada. You are number 1 in line."`. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line. */

/*2. Build a function `nowServing`. This function should accept the current line of people (`katzDeliLine`) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"*/


/*3. Build a function `currentLine` that accepts the current line of people and returns the current line as a string; for example, if 'katzDeliLine' is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  You don't have to use `katzDeliLine` as a variable or parameter name in your function though, it's just an example of a variable that might be passed to it. If there is nobody in line, it should return `"The line is currently empty."`*/

var katzDeli = [];

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  var lineNamesandNumbers = [];
  
  for(var i=0; i<line.length; i++) {
    lineNamesandNumbers.push(i+1 + ". "+ line[i]);
  }
  console.log("The line is currently: " + lineNamesandNumbers)
  return "The line is currently: " + lineNamesandNumbers.join(', ');
}

function nowServing(line) {
  if(!line.length) {
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  } else {
    //console.log("Currently serving " + line.shift());
    return "Currently serving " + line.shift() + ".";
  }
}

function takeANumber(line, name){
  line.push(name);
  
  console.log("Welcome, " + name + ". You are number " + line.length + " in line.");
  
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}


takeANumber(katzDeli, "Ada")
takeANumber(katzDeli, "Grace")
takeANumber(katzDeli, "Kent")
currentLine(katzDeli);
nowServing(katzDeli);
takeANumber(katzDeli, "Matz");
takeANumber(katzDeli, "Steven")
currentLine(katzDeli); 
nowServing(katzDeli);
currentLine(katzDeli)


/* var katzDeliLine =[]
function takeANumber(currentLine, name) {
  var placeInLine = currentLine.length + 1;
  var outputString = "Welcome, " + name +"." + "You are number " + placeInLine + ".";
  currentLine.push(name);
  return outputString
} 
*/
/* function nowServing(currentLine){
   var outputString;
  if (currentLine.length === 0) {
    outputString = "There is nobody waiting to be served!"
  }
 else{
   outputString = "Currently Serving " + currentLine[0] + ".";
   currentLine.shift();
 }
 return outputString
}
function nowServing(currentLine){
var outputString;
if (currentLine.length === 0){
outputString = “There is nobody waiting to be served!”
}
else{
outputString = “Currently serving ” + currentLine[0] + “.”;
currentLine.shift();
}
return outputString;
} */

//  function curentLine(katzDeliLine) {
//  let i = 0 ;
//  while (i < katzDeliLine.length); {
//    line.push(` `+[i+1]+`. `  + katzDeli[i])
//    i++;
//}
//if (katzDeli.length === 0) {
//    return "The line is currently empty.";
//  } else
//  return(`The line is currently:` + line);
//} 