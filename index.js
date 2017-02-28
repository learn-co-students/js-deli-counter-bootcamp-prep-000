var katzDeliLine = [];

function takeANumber(arr, clientName) {
    arr.push(clientName);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == clientName) {
            return "Welcome, " + clientName +
                   ". You are number " + (i + 1)+ " in line.";
        }
    }
}

function nowServing(arr) {
    if (arr.length == 0) {
        return "There is nobody waiting to be served!";
    } else {
        var client = arr.shift();
        return (`Currently serving ${client}.`);
    }
}

function currentLine(arr) {
    if (arr.length == 0) {
        return "The line is currently empty.";
    } else {
        var string = "The line is currently: ";
        var count = 0;
        while (count < arr.length) {

            string += `${count+1}. ${arr[count]}`;

            if (count < arr.length - 1) {
                string += ", "
            }
            
            count++;
        }
        return string;
    }
}
