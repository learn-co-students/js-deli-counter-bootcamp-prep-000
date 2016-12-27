var katzDeli = [];

function takeANumber(queue, customer) {
    queue.push(customer);
    return `Welcome, ${customer}. You are number ${queue.length} in line.`;
}

function nowServing(queue) {
    if (queue.length > 0)
        return `Currently serving ${queue.shift()}.`;
   else
        return 'There is nobody waiting to be served!';
}

function currentLine(argument) {
    let dataToReturn = 'The line is currently empty.';
    if (argument.length > 0) {
        dataToReturn = 'The line is currently: '
        for (let i = 0; i < argument.length; i++) {
            if (i + 1 === argument.length)
                dataToReturn += `${i + 1}. ${argument[i]}`;
            else
                dataToReturn += `${i + 1}. ${argument[i]}, `;

        }
    }
    return dataToReturn;
}
