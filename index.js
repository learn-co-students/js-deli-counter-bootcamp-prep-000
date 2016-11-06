function takeANumber(array, name)
{
    array.push(name);
    return array.length;
}

function nowServing(array)
{
    if (array.length == 0) {
        return "There is nobody waiting to be served!";
    } else {
        return array.unshift();
    }
}

function currentLine(array)
{
    if (array.length == 0) {
        return "The line is currently empty.";
    } else {
        var result = 'The line is currently:';
        for (let i = 0; i < array.length; i++) {
            result += ` ${i+1}. ${array[i]}`;
        }
        return result;
    }
}
