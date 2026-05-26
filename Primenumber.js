function primeNumber(val) {
    const num = val;
    if(num<=1) {
        return "not a prime/prime"
    } else {
        for(let i=2;i<=num/2;i++) {
            if(num%i == 0) {
                return "not a prime";
            } else {
                return "prime";
            }
        }
    }
}

const result = primeNumber(5);
console.log(result);