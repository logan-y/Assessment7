const perf = require('execution-time')();

let sumZilch = (arr) => {
    newArr = arr.sort((a, b) => a - b);
    let lefty = 0;
    let righty = newArr.length -1;
    while(lefty < righty){
        let sorter = newArr[lefty] + newArr[righty];
        if(sorter == 0){
            return true;
        } else if(sorter < 0){
            lefty++;
        } else {
            righty--;
        }
    }
    return false;
}
let array = [1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, -1, -3];

// perf.start(); 
// console.log(sumZilch(array));
// let resultsSumZilch = perf.stop();
// console.log('sum results', resultsSumZilch.preciseWords)

//I initially thought this would be somewhere in the milliseconds range, maybe around 200, 300. What I found interesting was that if I console log the results of the function, the runtime is about 12 ms. The function alone only took around 200μs. So most of those 12 ms was just the comp logging results. I only used a small array however. Would be cool to randomly generate larger datasets and see how it trends. 

let uniqChar = (str) => {
    return new Set(str).size == str.length;
}
// perf.start(); 
uniqChar('sometx');
// let resultsChar = perf.stop();
// console.log('char results', resultsChar.preciseWords);

// After the first function, I expected this runtime to be similar. Since these functions are both simple sorting and both return a Boolean, I was going to guess around 200μs. The logged result was 149.4μs.

function pangrams(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let re = /\s/g;
    let lowercase = str.toLowerCase().replace(re, "");
    
    for(let i = 0; i < alphabet.length; i++){
        if(lowercase.indexOf(alphabet[i]) === -1){
            return false;
        }
    }
    
    return true;
}

perf.start(); 
pangrams("The quick brown ox jumps over the lazy dooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog.");
let resultsPangram = perf.stop();
console.log('pangram results', resultsPangram.preciseWords);

// I expected this initially to have a longer runtime until I realized it is also only 
// returning a boolean value. The indexof method will loop though the string until it 
// hits the first occurrence of the target value. So, if i passed a string that had "a-y.....z" with ..... implying a massive amount of data, then it may take a little bit
// longer. But even then I don't suspect it would be more than 1 ms.

//the runtime of this function was 345.4μs
arrr = ["sossssssssssssssssssssssssssssssssssssssssssssss","what", "some", "test daaaaaaaaaa", "bbbkkkkkkkkkkkkkkkkkkbbbbbbbb","sos"];

let longestWord = (arr) => {
    let winner = arr.reduce((a,b) => {
        return a.length > b.length ? a : b
    })
    return winner.length;
}
// console.log(longestWord(arrr));
perf.start(); 
longestWord(arrr);
let resultsLong = perf.stop();
console.log("long word results", resultsLong.preciseWords);

//I expected this to be around the same length, 300 - 400μs but instead it ran for less than 100μs, with a runtime of 85.5μs. I suspect this is because I used the reduce method and a ternary operator rather than my first approach, which was using for loops and a placeholder var for max length.
