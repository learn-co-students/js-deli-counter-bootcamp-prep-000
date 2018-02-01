function takeANumber(line, name){

  line.push(name);

  return `Welcome, ${name}. You are number ${line.length} in line.`

}

function nowServing(line){

  if (!line.length) {
    //if line.length is evaluated as "falsey", aka "0" or empty, make it true and return the following

    return "There is nobody waiting to be served!";

  } else {

    return `Currently serving ${line.shift()}.`;

  }
}

    // * NOTE to SELF: Below is my code, which passed, but was less efficient than the final solution above
//
// function nowServing(line){
//
//   if (line.length !== 0){
//
    // * NOTE: easier to just do "if(!line.length){}".. it'll run the "if()" if line.length is equal to "0" or is empty (i.e. is "falsey"), otherwise it will run what's inside the "else" block
//
//     let name = line[0];
//
//     line.shift();
//
//     return `Currently serving ${name}.`
//
    // * NOTE: Didn't need to do all that crap above. line.shift() not only removes the first element from the array (line[0]) but it also RETURNS that removed element, so no need to create that extra "name" variable
//
//   } else {
//
//     return "There is nobody waiting to be served!"
//
//   }
// }

function currentLine(line){

  if(!line.length) {

    return "The line is currently empty."

  } else {

    const numbersAndNames = [];

      for (let i = 0; i < line.length; i++) {
        numbersAndNames.push(`${i + 1}. ${line[i]}`);
      }

      return `The line is currently: ${numbersAndNames.join(', ')}`;
      // can use array.join(); to add the ", " between each of the array elements when returned, so no need to do that if/else within the for loop
  }

}

// * NOTE to Self: Again, my code below, which passed, but not as efficient as final solution above

// function currentLine(line) {
//
//   if (line.length !== 0) {
//
//     let lineList = "The line is currently: ";
//
//     for (let i = 0; i < line.length; i++) {
//       if (i === line.length - 1) {
//
//         lineList += `${i + 1}. ${line[i]}`;
//
//       } else {
//
//         lineList += `${i + 1}. ${line[i]}, `;
//
//       }
//     }
//
//     return lineList;
//
//   } else {
//
//     return "The line is currently empty.";
//
//   }
// }
