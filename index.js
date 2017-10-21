var katzDeli = [];
function takeANumber(array,name) {
  array.push(name);
  var text = `Welcome, ${name}. You are number ${array.length} in line.`;
  return text;
}

function nowServing(array) {

  if (array[0] != null ) {
    var nome = array.shift();
    var text1 = `Currently serving ` + nome + ".";
    return text1;

  }
  else {
   var text = "There is nobody waiting to be served!";
   return text;
  }
}

function currentLine(array) {
var fixed;
var text = '';
  if (array[0] != null)
  {
    fixed = "The line is currently: ";
    for (var i = 0; i < array.length; i++) {
      var v = i + 1;
      text = text + `${v}. ${array[i]}` ;
      if ((array.length - 1) != i) {
        text = text + ', '
      }
    }
    return fixed + text
  }
  else {
    text = "The line is currently empty.";
    return text;
  }
}
