function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i)
    }
    console.log('Hooray')
}

function countDownRecursive(n) {
    if (n <= 0) {
        console.log('Hooray')
        return
    }
    console.log(n)
    countDownRecursive(n - 1)
}


function sumRange(n) {
    let total = 0;
    for (let i = n; i > 0; i--) {
        total += i
    }
    return total
}

function sumRangeRecursive(n, total = 0) {
    if (n <= 0) {
        return total
    }
    return sumRangeRecursive(n- 1, total + n)
}

function printChildrenRecursive(t) {
    if (t.children.length === 0) {
        return
    }
    t.children.forEach(child => {
        console.log(child.name)
        printChildrenRecursive(child)
    });
}

const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                { name: 'Kyle', children: []},
                { name: 'Sophia', children: []}
            ]
        }
    ]
}


function sumRange(n, total = 0) {
    if (n <= 0) {
        return total
    }
    return sumRange(n-1, total + n)
}

console.log(sumRange(5))

function power(b, e) {
    if (e === 0) {
        return 1;
    }
    return b ** e
}

console.log(power(3, 3))
console.log(power(3, 0))

function factorial(n, total = 1) {
    if (n <= 1) {
        return total
    }
    return factorial(n-1, total * n)
}
console.log(factorial(5))

function factorial(n) {
    total = 1
    for (let i = n; i > 1; i--) {
        total *= i
    }
    return total
}

console.log(factorial(5))
