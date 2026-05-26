function outer() {

    let temp = 0;
    return function inner() {
        temp = temp+1;
        console.log(temp);
        return temp;
    }
}

const result = outer();

result();
result();
result();
