
function takeANumber(arr, name) {
    arr.push(name);
    return `Welcome, ${arr[arr.length -1]}. You are number ${arr.length} in line.`;
}

function nowServing(arr) {
    if (arr.length === 0) {
        return "There is nobody waiting to be served!";
    } else {
        return `Currently serving ${arr.shift(0)}.`;
    }
}

function currentLine(arr) {
    if (arr.length === 0) {
        return "The line is currently empty.";
    } else {
        let ret = "The line is currently: ";
        for (let i = 0; i < arr.length; i++) {
            if (i !== arr.length - 1) {
              ret = ret + `${i+1}. ${arr[i]}, `;
            }
            else {
              ret = ret + `${i+1}. ${arr[i]}`;
            }
        }
        return ret;
    }
}
