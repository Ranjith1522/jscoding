function anagramFunc(val1,val2) {
    let word1 = val1.toLowerCase().split("").sort().join('');

    let word2 = val2.toLowerCase().split("").sort().join('');

    if(word1 === word2) {
        console.log("Anagram");
        return true;
    } else {
        console.log("Not an Anagram");
        return false;
    }
}

anagramFunc('race','Racer');