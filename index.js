
var katzDeliLine = [];

function currentLine(x){
  var array = []//defining array...use this as my "line"
  if (x.length === 0){//this will return my line is empty
    return "The line is currently empty."
  } else{//start my else statement with a for loop
    for(let i = 0; i < x.length; i++){//typical for loop but use i < length of the current line(x) then use standard iteration (i++)
      array += (i + 1) + ". " + x[i] + ", "//i want the length of my line to be 1 more than the index. use a (i+ 1) after my array is stated
    }//i want to add my text using a "+" operator and then i will need to concatenate? my length in while iterating through the array. dont forget comma at the end
    array = array.slice(0, array.length -2)
    return "The line is currently: " + array
  }
}

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)// i want to push the deli line to my name array and then return them in succession. try and concatenate? the text
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(x){
  if (x.length===0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = x[0]
    x.splice(0, 1)
    return "Currently serving " + name + "."
  }
}
