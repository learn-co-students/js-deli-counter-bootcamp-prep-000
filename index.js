// var katzDeliLine = [];. However, you don't need to code the array as a variable, since the test scripts will create it and pass it to the functions you are about to build.

// TODO: Build a function that a new customer will use when entering the deli. The function, takeANumber, should accept two paramaters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as "Welcome, Ada. You are number 1 in line.". And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

function takeANumber(customersWaiting, customerName) {
    customersWaiting.push(customerName);
    let currentPosition = customersWaiting.indexOf(customerName) + 1;
    return 'Welcome, ' + customerName + '. ' + 'You are number ' + currentPosition + ' in line.';
}

// TODO: Build a function nowServing. This function should accept the current line of people (katzDeliLine) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

function nowServing(customersWaiting){
    if(customersWaiting.length > 0){
        return 'Currently serving ' + customersWaiting.shift() + '.';
    } else {
        return 'There is nobody waiting to be served!';
    }
    return customersWaiting;
}