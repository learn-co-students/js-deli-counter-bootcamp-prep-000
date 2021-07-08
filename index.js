//DELI!

var katzDeli=[];
var otherDeli=["Steven", "Blake", "Avi"];

//Step 1: "Take a number"

function takeANumber(array,entry){
array.push(entry);
return `Welcome, ${entry}. You are number ${array.length} in line.`;
}


//Step 2: "Get served"

function nowServing(array) {
  if(array>[]) {
    return `Currently serving ${array.shift()}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}


//Step 3: 'Current Line'

function currentLine(array){
var line=[];
  if(array>[]){
    for(let i=0;i<array.length;i++){
      line.push(` ${i+1}. ${array[i]}`)
      }
      return "The line is currently:" + line;
  }else{
      return "The line is currently empty."
  }
}


