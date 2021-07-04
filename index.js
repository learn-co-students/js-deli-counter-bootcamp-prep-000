
function takeANumber(katzDeliLine, name){
katzDeliLine.push(name)

return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";

}

function nowServing(katzDeliLine){
if(katzDeliLine.length === 0){
return "There is nobody waiting to be served!"}
else {
  var currentCustomer = katzDeliLine[0]
  katzDeliLine.shift()
  return "Currently serving " + currentCustomer + "."
}

}



// function currentLine(katzDeliLine){
//   var line = "The line is currently: "
//   var count = 1
//   if (katzDeliLine.length === 0){
//     return "The line is currently empty."
//   }
//
//   else {
//     while(count < katzDeliLine.length ){
//       line = line + count + ". " + katzDeliLine[count - 1] + ", "
//       count++
//     }
//     // "The line is currently: 1. "
//     return line + katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length - 1]
//   }
// }

function currentLine(katzDeliLine){
  var line = "The line is currently: "
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else {
    var array = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      array.push(`${i + 1}. ${katzDeliLine[i]}`);
    }
    // "The line is currently: 1. Bill, 2. Jane, 3. Ann"

    return line + array.join(', ')
  }
}
