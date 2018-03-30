
var katzDeli = [];

var katzDeliLine = [];

function takeANumber(array, name){
  var num = array.length + 1;
  var s = `Welcome, ${name}. You are number ${num} in line.`;
  array.push(name);
  return s;
  
}

//return the first person in line and remove 'em
//if there is nobody in line return "there is nobody waiting to be served!
function nowServing(array){
  if (array.length === 0) {
    return 'There is nobody waiting to be served!';
  }  
  else
    var s = "Currently serving " + array[0] + '.';
    array.shift();
    return s;
}


function currentLine(array){
  if (array.length === 0){
    return "The line is currently empty.";
  }
    else
      var s = "";
      for (var i=0; i < array.length; i++){
        if (array[i] === array[array.length -1]){
          s += i + 1 + '.'+ " " + array[i] ;
        }
        else
          s += i + 1 + '.'+ " " + array[i]+ ", ";
      }
      return "The line is currently: " + s ;
  
}

