var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  var  placeInLine= katzDeli.length;

  return `Welcome, ${name}. You are number ${placeInLine} in line.`
}



function nowServing(katzDeli){

  if(katzDeli.length > 0){
    var personBeingServed = katzDeli[0];
    katzDeli.shift();
    return `Currently serving ${personBeingServed}.`;
  } else {
    return "There is nobody waiting to be served!"
  }

}


function currentLine(array){

  var lineOrder = "The line is currently: ";

  if(array.length > 0){
    for(var i = 0; i < array.length - 1; i++){
      var linePlace = i + 1;
      lineOrder += `${linePlace}. ${array[i]}, `
    }

    var lastPlace = array.length;
    var lastPerson = array[array.length - 1];

    return lineOrder + `${lastPlace}. ` + lastPerson;

    // return lineOrder + array.length + ". " + array[array.length - 1]

  }else{
    return "The line is currently empty."
  }

}
