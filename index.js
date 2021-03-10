function takeANumber(line, name) {
/*
The function should return a welcome message including the new person's position
in line, such as `"Welcome, Ada. You are number 1 in line."
*/
line.push(name);
return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  /*
This function should accept the current line of people (`katzDeliLine`) and
return the first person in line and then remove that individual from the line.
If there is nobody in line, it should return
"There is nobody waiting to be served!"

  */
  let message;
  if(line.length > 0) {
    message = `Currently serving ${line[0]}.`
    line.shift()
  } else {
    message = 'There is nobody waiting to be served!';
  }
  return message;
}

function currentLine(line) {
  /*
It accepts the current line of people and returns the current line as a
string; for example, if 'katzDeliLine' is currently `["Ada", "Grace"]`,
`currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada,
2. Grace"`.  You don't have to use `katzDeliLine` as a variable or parameter
name in your function though, it's just an example of a variable that might be
passed to it. If there is nobody in line, it should return `"The line is
currently empty."`
  */
  let message = 'The line is currently';
 if (line.length > 0) {
   message += ': ';
   let i = 0;
   while(i < line.length) {

     if(i === line.length - 1) {
       message = message + (i + 1) + '. ' + line[i];
     } else {
       message = message + (i + 1) + '. ' + line[i] + ', ';
     }
     i++;
   }
 } else {
   message += ' empty.';
 }
 return message;
}
