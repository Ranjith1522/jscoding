
function reverse(val) {
    let rString = '';
    for(let i=val.length-1;i>=0;i--) {
        rString+=val[i];
    }
    return rString;
}



const result = reverse("ranjith");
console.log(result);