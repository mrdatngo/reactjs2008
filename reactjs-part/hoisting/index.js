function increase() {
    let total = 0;

    return () => {
        return ++total;
    };
}

// let result = increase();
// result = increase();
// console.log("total: ", result);

let myIncrease = increase();
console.log(myIncrease());
console.log(myIncrease());
console.log(myIncrease());
console.log(myIncrease());
