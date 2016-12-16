function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  var name = katzDeliLine.shift()
  return (name != undefined ?`Currently serving ${name}.` : "There is nobody waiting to be served!")
}
function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
      return "The line is currently empty."
  }
  var names = "The line is currently: "
  for(let i = 0; i < katzDeliLine.length; i++){
    if(i != 0){names = `${names}, `}
    names = `${names}${i + 1}. ${katzDeliLine[i]}`
  }
  return names
}

/*


2. Build a function `nowServing`. This function should return the next person
 in line and then remove them from the line. If there is nobody in line, it
 should return "There is nobody waiting to be served!"

3. Build a function `currentLine` that returns the current line. For example,
if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)`
would return `"The line is currently: 1. Ada 2. Grace"`.  If there is nobody in
 line, it should return `"The line is currently empty."`

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
```

*/
