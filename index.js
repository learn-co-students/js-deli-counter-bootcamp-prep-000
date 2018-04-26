//Test 1,2,3: Function Adds A Person To The Line

var katzDeliLine = []; 

function takeANumber(array, newperson) {
  array.push(newperson);
  return "Welcome, " + newperson + ". You are number " 
  + array.length + " in line.";
}

//Test 4,5: Who Is Currently Being Served?

function nowServing(array) {
  if(array.length > 0) {
  let person = array[0];
  array.shift();
  return "Currently serving " + person + ".";
  }else {
    return "There is nobody waiting to be served!";
  }
}

//Test 
  
function currentLine(array) {
  if(array.length > 0) {
    let newArray = [];
    let counter = 0;
    while(counter < array.length) {
      newArray.push(" " + (counter+1) + ". " + array[counter]);
      counter += 1;
    }return ("The line is currently:" + newArray);
  }else {
    return "The line is currently empty.";
  }
}