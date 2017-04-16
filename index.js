var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
   katzDeliLine.push(name)
   var linePosition = katzDeliLine.length
   return "Welcome, " + name + ". You are number " + linePosition + " in line."
// return linePosition
}

function nowServing (array){

  if (array.length===0){ return "There is nobody waiting to be served!"}

  else{

 return `Currently serving ${array.shift()}.`
  }
}


function currentLine (array){
  if (array.length===0){return "The line is currently empty."}

  else{
    var output = "The line is currently: "
    for(var i=0;i<array.length;i++)
    {

      if (i===array.length-1){output = output + `${i+1}. ` + array[i]}
      else{ output = output + `${i+1}. ` + array[i] + ", "}

    }

  }


 return output

}
/*
3. Build a function `currentLine` that returns the current line.
For example, if `katzDeliLine` is currently `["Ada", "Grace"]`,
`currentLine(katzDeliLine)
` would return `"The line is currently: 1. Ada 2. Grace"`.
If there is nobody in line, it should return `"The line is currently empty."`

### Hint

Example usage:

```javascript
var katzDeliLine = [];

takeANumber(katzDeliLine, "Ada"); // 1
takeANumber(katzDeliLine, "Grace"); // 2
takeANumber(katzDeliLine, "Kent"); // 3

currentLine(katzDeliLine); // "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "3"

currentLine(katzDeliLine); // "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent 2. Matz"

*/
