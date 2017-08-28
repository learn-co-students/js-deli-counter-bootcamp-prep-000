var katzDeliLine = [];
var deliLine = ["Steven", "Blake", "Avi"];

function takeANumber(array, name){
  var newArray = array;
  newArray.push(name);
  var place = newArray.indexOf(name);
  var spot = place+1;
  var message = `Welcome, ${name}. You are number ${spot} in line.`;
  return message;
}

function nowServing(array){

  var person = array[0];
  // array.shift();
  var servingMessage;
  var dismissalMessage;
  if(array.length == 0){
    dismissalMessage = "There is nobody waiting to be served!";
    return dismissalMessage;
  }else{

    // var message = `Currently serving ${person}`;
    // var elseMessage = `Currently serving ${person}`;
    servingMessage = `Currently serving ${person}.`
    array.shift();
    return servingMessage;


  }
  // return array;

}

// function currentLine(array){
//   if(array.length>0){
//   for (let i = 0; array.length>i; i++){
//     var person = array[i];
//     return`${i}. ${person}`;
//   }
// }
// }
takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."
nowServing(deliLine);
