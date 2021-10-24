function reverseArray(string){
    let reversedArr=[];
    for(let i =string.length-1;i>=0;i--){
        reversedArr.push(string[i])
    }
    return reversedArr.join('')
}
console.log(reverseArray("Rohit"))