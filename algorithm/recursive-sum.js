function sum(n) {
    if (n === 1) {
        console.log('sum(1) = 1');
        return 1;
    } else {
        console.log(`sum(${n}) = sum(${n - 1}) + ${n}`);
        return sum(n - 1) + n;
    }
}

console.log(sum(5));
