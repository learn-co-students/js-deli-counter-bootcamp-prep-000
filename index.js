var katzDeliLine = [];
var otherDeli = ["Steven", "Blake", "Avi"];
var testLine =[];
function takeANumber (array, name){
  //

  // value of index and destructively  adds a new client Name at the end
  //of the katzDeli array and otherDeli array
  var x = array.push(name);

  return console.log('Welcome ' + name + '. You are number ' + x + ' in line.' )


}
function currentLine(array){
  var test = array.length;
  if (test === 0){
    //true
    console.log("The line is currently empty.");
  } else{//false
  for (var i = 0; i <= array.length; i++){
   console.log("The current line is currently: " + (i+1) +". " + (array));
  }
}
}
function nowServing(array){
  //const newAddArray = array.slice(1);
  array.pop();
  var test = array.length;
  if (test === 0){
    //true
    console.log("There is nobody waiting to be served!");
} else {//false
    console.log("Currently serving: " + (array[0]))
  //return newAddArray;
}
}
