var katzDeliLine = [];

function takeANumber (array, name){
  // destructively  adds a new client Name at the end
  array.push(name);
  //Concant print screen text + name in array by the length of the array index
  return console.log('Welcome ' + name + '. You are number ' + array.length + ' in line.' )
}

function currentLine(array){
  var test = array.length;//gets the length of the array
  var currentLineMembersPlusNumbers = [];//test array to store temp data
  if (test === 0){
    //true if no one is in the line print this
    return "The line is currently empty.";
  } else{//false if somebody is in the line print this
  for (var i = 0; i <= array.length; i++){
    currentLineMembersPlusNumbers.push(i+1 + ". " + array[i]);
   //console.log("The current line is currently: " + (i+1) +". " + (array[i]));
  }
  //joins line number plus name separated by comma
  return "The line is currently: " + currentLineMembersPlusNumbers.join(', ');
}
}
function nowServing(array){
  //const newAddArray = array.slice(1);
  var test = array.length;//gets the length of the array
  if (test === 0){
    //true
    //console.log("There is nobody waiting to be served!");
    return "There is nobody waiting to be served!";
} else {//false
    //console.log("Currently serving: " + (array[0])) not good
    return "Currently serving: " + array.shift();//removes the first item of the array and prints array
}
}
