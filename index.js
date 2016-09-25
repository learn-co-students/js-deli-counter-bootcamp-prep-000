let katzDeli = [];
let one = 1;

function takeANumber(array, name) {
  array.push(name)
  return `Welcome, ${name}. You are number ${array.indexOf(name) + one} in line.`
}

function nowServing(array) {
  if(array == undefined || array.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
      var serving = array[0]
      array.shift()
      return `Currently serving ${serving}.`
    }
}

function currentLine(array){
  if(array == undefined || array.length == 0) {
    return "The line is currently empty."
  } else {
    let string = "The line is currently: "
    for(var i = 0; i < array.length; i++) {
      string+= i+one + ". " + array[i];
      if(array.length-1 != i){
        string += ", "
      }
    }
    return string;
  }
}
