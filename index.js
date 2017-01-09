// testing arrow functions
// when to use a for loop any time you need to perform an operation on each individual element in an array
var katzDeli = [];
var takeANumber = (katzDeliLine,name) =>{
katzDeliLine.push(name)
    var num = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${num} in line.`
}

var nowServing = (array) =>{
  if(array.length >= 1 ){
      var name = array.shift()
  return `Currently serving ${name}.`
}else {
      return 'There is nobody waiting to be served!'
    }
  }


var currentLine = (line) =>{
  var arr = [];
if(line.length >= 1){
  for (var i = 0; i< line.length; i++){
    var names = line[i];
    var num = i + 1
    var name = `${num}. ${names}`
    arr.push(name)
  }return `The line is currently: ${arr.join(", ")}`//because ${} allows you to use non string code in a string
}else {
    return "The line is currently empty."
    }
  }
