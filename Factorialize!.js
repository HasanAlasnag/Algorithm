function factorialize(n) {
        if (n === 0 || n === 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorialize(0)); 
console.log(factorialize(10)); 
console.log(factorialize(20));