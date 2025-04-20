function verbing(str) {
    if (str.length < 3) return str;
    else if (str.endsWith('ing')) return str + 'ly';
    else return str + 'ing';
}

console.log(verbing('swim'));      
console.log(verbing('swimming'));  
console.log(verbing('go'));        
