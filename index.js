var katzDeliLine = ["Jonathan", "Bianca", "Eric", "Mike", "Jonah"]; //current line of people

function takeANumber(array, name){
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array){
 if (array.length > 0){
    var x = `Currently serving ${array[0]}.`
    array.shift()
    return x
 } else {
   return "There is nobody waiting to be served!"
 }
}
 // console.log(nowServing(katzDeli))
 // console.log(nowServing(katzDeli))


 function currentLine(line){
   if (line.length > 0){
       var x = "The line is currently:"
       for(var i = 0; i < line.length; i++){
         if(i === line.length - 1){
           x += ` ${i + 1}. ${line[i]}`
         } else {
           x += ` ${i + 1}. ${line[i]},`
         }
       }
       return x
   } else {
       return "The line is currently empty."
   }
 }




// function currentLine(line){
//   if (line.length > 0){
//       var x = "The line is currently"
//       for(i = 0; i < line.length; i++){
//         x += ` ${i + 1}. ${line[i]},`
//       }
//       console.log(x)
//       return x
//   } else {
//       return "The line is currently empty"
//   }
// }
//
// currentLine(katzDeliLine)
// console.log(currentLine(katzDeliLine))




// `The line is currently ${index + 1}. ${name}
// return name of people in line from array
// "The line is currently 1. Jonathan"
// "The line is currently 1. Jonathan, 2. Bianca"
