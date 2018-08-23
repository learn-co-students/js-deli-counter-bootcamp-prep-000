// I included these as instructed in the index-test.js script

var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];


// I was stuck on this function until I went back and read the HINT in the lab notes. Before that, I didn't realise we could rely on .length as an input for the queue count.

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}


// This took me a while. I was trying to use a for loop to state if line was empty ... else ... but couldn't quite get the expected result. With some help from one of the coaches I was able to look into using an array.shift() instead.

function nowServing(otherDeli){
  if (otherDeli.length === 0) return "There is nobody waiting to be served!";
  var customer = otherDeli.shift();
  return "Currently serving " + customer + ".";
}


// Here I looked to work with an Object, given that we need to list the position and name of the person, but that didn't quite work and I was having difficulty getting it to output the index of the object/array alongside the name. Instead I then tried to focus on an array, using a loop.

function currentLine(katzDeli){
  var line = [];
  if (katzDeli.length === 0) return "The line is currently empty.";
  for (var i = 0; i < katzDeli.length; i++){
    line.push(" " + [i + 1] + ". "  + katzDeli[i]);
  }
  return ("The line is currently:" + line);
}