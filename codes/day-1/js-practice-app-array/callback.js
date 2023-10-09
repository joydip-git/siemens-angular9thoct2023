function foo(fnRef) {
    const res = fnRef('anil')
    console.log(res)
}

function foo1(name) {
    return 'callback ' + name
}

foo(foo1)

