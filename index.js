var katzDeli = []                                                                 //create empty array called katzDeli

function takeANumber(katzDeliLine, name){                                         //create a function that takes two arguments, katzDeliLine (array) & name (string)
    var katzDeli = katzDeliLine;                                                  //put contents of katzDeliLine in another variable called katzDeli so it's not altered
    var counter = katzDeli.length + 1;                                           //create a variable (counter) thats equal to the length of katzDeli + 1 (accounts for index starting at 0)
    katzDeli.push(name);                                                         //add name argument to the end of the katzDeli array
    return (`Welcome, ${name}. You are number ${counter} in line.`);              //return a string that adresses the person and gives them their spot on the line
}

function nowServing(katzDeliLine){                                              //create a function that takes in an array as an argument
  var katzDeli = katzDeliLine;                                                   //store the array in another variable so that it's not altered
  while (katzDeli.length > 0){                                                  //when there's something in the array (array.length > 0) perform task
    var box = katzDeli[0];                                                       //create a variable box and put the contents of the first index of katzDeli in it
    katzDeli.shift();                                                           //remove the first index of katzDeli
    return (`Currently serving ${box}.`);                                         //return a string that says who the first person in line is that should be served
  }
  return ("There is nobody waiting to be served!");                             //when the array has nothing in it, return a string that says there's no on on line to be served
}

function currentLine(katzDeliLine){                                             //create a function that takes in an array as an argument
  var katzDeli = katzDeliLine;                                                   //put contents of katzDeliLine in another variable called katzDeli so it's not altered
  var string = ("The line is currently: ");                                     //create a variable that holds a string with the beginning of a sentence
  while (katzDeli.length > 0){                                                  //when there's something in katzDeli (array.length > 0) perform a task
    for (var n = 0; n < katzDeli.length - 1; n++){                              //create a variable n that starts at 0, perform the for loop up until the penultimate value proceeding 1 index at a time
      string = string + (`${n+1}. ${katzDeli[n]}, `);                             //at each round of the for loop add the name of the person and their place in line to the end of the sentence string
    }
    string = string + (`${katzDeli.length}. ${katzDeli.slice(-1)}`);               //for the last value in the array, when we add the person's name and place in line to the end of the sentence we don't want to add a comma
    return string;                                                              //return the full sentence
  }
  return ("The line is currently empty.");                                      //if there's no one in line (array.length = 0) return a string that says 'the line is currently empty.'
}
