let katzDeliLine =[];
function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name); //adds the name to the Deli line array
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`; //returns string with name and the length of the deli line which is the new person's position
}

function nowServing(katzDeliLine){
//loops over deli array
// checks is deli line is empty. If yes, tells no one is waiting
// if line is not empty then run code else to remove & return the 1st person from the line
  if(katzDeliLine.length === 0){
      return "There is nobody waiting to be served!"; 
    } 
  for(let i =0; i < katzDeliLine.length; i++){
    if (katzDeliLine) {
      return `Currently serving ${katzDeliLine.shift()}.`;
    }
  }
}

function currentLine(katzDeliLine){
  //create count array to copy each katzDeliLine array element to
  //loops over array and add each customer at ith index to cust array
  //add each ith customer to cust array
  //push cust to count with number added
  let count = [];
 if (katzDeliLine.length === 0){
       return "The line is currently empty.";
    } 
  for(let i=0; i < katzDeliLine.length; i++){
    if (katzDeliLine){
      let cust = katzDeliLine[i];
      count.push(`${i + 1}.${cust}`);
    }  
  }
   return `The line is currently: ${count}`;
}