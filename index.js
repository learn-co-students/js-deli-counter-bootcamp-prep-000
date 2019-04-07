//let katzDeliLine = ['Ada', 'Grace']

// // #1 takeANumber
// //unclear if should mutate/destroy the "current line of peopl" = katzDeliLine. set it to mutate.
//
function takeANumber (katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  console.log(`Welcome, ${newPerson}. You are number ${katzDeliLine.indexOf(newPerson)+1} in line.`)
}

// takeANumber(['Ada', 'Grace'],'Ezra')
//
// //there's an extra space after the output, how to fix?

// // #2 nowServing
//
// function nowServing(katzDeliLine) {
//   if (katzDeliLine.length) {
//   console.log(`Currently serving ${katzDeliLine[0]}.`)
//   katzDeliLine.shift()
//   console.log(katzDeliLine)
//   } else {
//   console.log('There is nobody waiting to be served!')
//   }
// }
//
// nowServing (['Ada', 'Grace', 'Ezra'])

// // nowServing (['Ada', 'Grace', 'Ezra'])

// // how to set it up to return when line is empty? getting error "TypeError: Cannot read property 'length' of undefined at nowServing"

// // #3 currentLine
//
// function currentLine(katzDeliLine) {
//   if (Array.isArrary(katzDeliLine) || katzDeliLine.length) {
//   console.log('The line is currently:', katzDeliLine.length, ' ', katzDeliLine[0])
//   } else {
//   console.log('The line is currently empty')
//   }
// }
