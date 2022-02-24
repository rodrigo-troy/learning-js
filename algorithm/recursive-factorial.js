function factorial(n) {
    if (n === 0) {
        console.log('factorial(0) = 1');
        return 1;
    } else {
        console.log(`factorial(${n}) = factorial(${n - 1}) * ${n}`);
        return factorial(n - 1) * n;
    }
}

console.log(factorial(3));
