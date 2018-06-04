function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  console.log(`Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`);
   return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
 }
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  } else { 
    return `Currently serving ${katzDeliLine.shift()}.`;
   
  }
}
function currentLine(line){
  if (line.length > 0) {
  console.log(`The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`);
  return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
  } else {
    console.log("The line is currently empty.")
    return "The line is currently empty.";
  }
  
}