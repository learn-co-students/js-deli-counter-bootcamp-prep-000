function takeANumber(katzDeliLine, name) {
    // return position in line
    var i = 0;
    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.";
}

function nowServing(katzDeli) {
    if (katzDeli.length > 0) {
        var name = katzDeli.shift();
        return "Currently serving " + name + ".";
    } else {
        return "There is nobody waiting to be served!";
    }
}

function currentLIne(array) {
    if (array.length === 0) {
        return "The line is currently empty";
    } else {
        for (var i = 1; i < array.length; i++) {
            return "The line is currently: " + i + ". ";
        }
    }
}

// var i = 0;
// function currentLine(katzDeliLine) {
//     // for array taken in,
//     // returns all of the elements in the array, test if array is empty,
//         // if array is not empty
//             // if first element in array, no comma at the beginning, go to next condition
//             // if subsequent, comma at beginning, go back through loop
//         // until array is empty
//             // different message
//     if (katzDeliLine.length > 0) {
//         // moved var i = 0; outside of function
//         // if more
//         if (katzDeliLine.length > 1) {
//             i++;
//             return "I need to figure this out" + [i];
//         } else if (katzDeliLine.length == 1) {
//
//             return "The line is currently: 1. " + katzDeliLine[i];
//         } else {
//             return "The line is currently empty.";
//         }
//     }
// }
//         // if 1 element
//
//         // if no elements
//
//     //     while (i < katzDeliLine.length) {
//     //
//     //         // i++;
//     //         // return text + i + ". " + katzDeliLine[i -1] + ", ";
//     //
//     //         if (i = 0; i < katzDeliLine.length; i++) {
//     //             return ("The line is currently: " + i + ". " + katzDeliLine[i]);
//     //         }
//     //
//     //     } else {
//     //         return "The line is currently empty.";
//     //     }
//     // }
