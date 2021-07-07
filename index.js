function takeANumber(line, name) {
  line.push(`${name}`)
  return `Welcome, ${name}. You are number ${parseInt(line.length)} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  if (parseInt(line.length) > 0) {
    var currentCustomer = line.shift()
    return `Currently serving ${currentCustomer}.`
//    return `Currently serving ${line[0]}.`
// } if (line.length = 0) {
//     return "There is nobody waiting to be served!"}
}}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty." //notice that line doesn't become the name of the line in question because it is not inside `${}`
  }
  if (parseInt(line.length) > 0) { // could do else {}
    let whosLeft = [];
     let i = -1; //had to set to -1 to make the counter work in this case
     while (i++ < line.length-1) { // if the iteration of i happens after the while loop, i=0 in the previous condition.
         whosLeft.push(`${i+1}. ${line[i]}`)
       } return `The line is currently: ${whosLeft.join(', ')}`; //note that curly bracket has to precede statement otherwide return cuts while loop
//     } return `The line is currently: ${whosLeft[i]}.`

    // for (let i = 0; i < line.length; i++) {

    }
  }

// i = 0
// while (i < line.length) {
// i++
// }
