function palindrome(val) {
    let palindrome2 = '';

    for(let i=val.length-1;i>=0;i--) {
        palindrome2+=val[i];
    }
    

    if(palindrome2 === val) {
        console.log("Palindrome");
        return true;
    }
    else {
        console.log("not a palindrome");
        return false;
    }
}

palindrome("racecar");