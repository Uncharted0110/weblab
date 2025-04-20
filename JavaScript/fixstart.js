function fixStart(str) {
    const firstChar = str[0];
    let result = firstChar;

    for (let i = 1; i < str.length; i++) 
        if (str[i] === firstChar) result += '*';
        else result += str[i];
    return result;
}

console.log(fixStart('babble'));
