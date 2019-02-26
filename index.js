// here we will create a "take a number" feature for a  Katz deli

var katzDeli = [];
 function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
 }
 
 // At the start of the day the deli is empty. So ofcourse the que is also empmty - there for we need an empty array to represent this: which is the variable "katzDeli"
 // next we build a function called "takeANumber" with two pararmeters : the line and the new name to be added to the line - The line will be repsented by the var "katzDeli" - and "name" is used for any new names added to the line.
 
 // it asked for the function to return a welcome message with the customers name as well as their place in line.
 // firstly we use the ".push" feauture to add the new customers name to the "katzDeli" array. remember this is a destrutive method. Push method also adds to the end of the list.
 // after this within the function also we ask it to return the sting "Welcome, ${name}. You are number ${katzDeli.length} in line."
 // ofcourse the ${name} is the new customers name and we use the use of the feature ".length" to tell us the length of the array which will also represent the place in the line of the new customer. 



function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}	

// now to create a function called "nowServing".this function shal take the array "katzDeli" and return the first person in line. since that person is now being served. It should then remove that name from the list/array. 
// we will use a "while loop" to do this rather than a for loop since we are not sure how many times we want this loop to be executed. Since this is dependent on how many customers the deli get that day. 
// A while loop follows the format: " while ([condition]) { [loopBody]; } " 
// first we introduce "i" and set it to value "0" since that is where the index of the array starts.
// This means that the conditoin of the while loop implie: "i" must always be less than the lenth of the katzDeli line. since if the line is not greater than 1 then its equal to 0 (hence the line is empty). the while loop will continue untill the katzDeli lenth is no longer greater than 0 and hench when the line is empty. 
// and if the line is empty then we want the functoin to print the sting: "The line is currently empty"
// In the loop body we simply have "i++" this is the increment operator. 
// so once the "while loop" stops since the lenth of katzDeli is equal to 0 which means the condition is no longer true. the function will move on to the "if statement". 
//An if statement follows similar format to an "while loop".  "if (condition) {statement we want to be returned}". 
// so our condition for our `if` statement is: is the length of katzDeli equal to 0. ( we use the triple equal sign to check equalities).
// an if statement is always printed if the condition shows to be true. if it nots true then nothing will be printed unless an if statement is followed  by an "else" statement. 
// here we have an `if` statement followed by an else statment.
// so if the lenth of the katzDeli is 0 we get the statment "There is nobody waiting to be served!"
// if the lenth of katzDeli is greater than 0 then we get the else statement printed: `Currently serving ${katzDeli.shift()}.`
// here we use the ".shift" feature to remove the first name from the list and print it in our else statement. 
// for example if "ella" was the first name in our line. the name will be removed from the line and the function will print: `Currently serving ella.`



var line = [];

 function currentLine(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}

// now we want to create a functon to show us the current line. 
// this line will be "variable line" which is currently an empty array.
//now we create the functoin "currentLine" witht the pararmeter of "katzDeli".
//This functoin is going to follow the same format as the above function: whileloop followed by an if statement then an else statement.
//again `i` is set to equal 0. Since the first index of an array is 0. 
// the while loop conditon follows same as statement above.
// within the loop body of the while statment we use the `.push` feature to add the line number next to the coresponding name to the "var line". and repeat. which would give us something like : 1. Ada, 2. Grace
// next we have our if statement which again follows the conditon: is the katzDeli length ewual to 0. and if this is true it will print the "if" statement:"The line is currently empty".
// if the conditon is false then the function will print the "else" statment:`The line is currently:` + line. 
// which following from out example would give: `The line is currently:1. Ada, 2. Grace`