//Function 1 start
function takeANumber(num, name){
num.push(name);//push the names to the array num
//for loop to iterate the array num
for(var i=0; i<num.length;i++)
{
  if(num[i]===name)//Detect the name in the current array to trace the current position
  {
    //use variables to dynamically output names and positions
    var string = `Welcome, ${name}. You are number ${i+1} in line.`;
    return string;
  }}}

//Function 2 start
function nowServing(serving){
  //return this when array is empty
  if(serving.length<1){
    return "There is nobody waiting to be served!"
  }
  else{
    //use shift() to remove the first element and return it.
    return `Currently serving ${serving.shift()}.`;
  }
}

//Function 3 start
function currentLine(line){
  if(line.length<1){
    //return this when array is empty
    return "The line is currently empty."
  }
  else{
    var upArray = []; //empty array to hold the new elements
    for(var i=0; i<line.length; i++)
    {
      //use for loop to push numbers and names to the empty upArray
        upArray.push(`${i+1}. ${line[i]}`);
    }
    //use the join() to add a comma and a space between each elements
    return `The line is currently: ${upArray.join(', ')}`;
  }

}
