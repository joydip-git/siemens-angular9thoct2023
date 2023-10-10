function add(a: number, b: number): number {
    return a + b
}

function subtract(a: number, b: number): void {
    console.log(a - b)
}

type fnRefType = (x: number, y: number) => number
function invoke(fnRef: fnRefType) {

}
invoke(add)
//invoke(subtract)

function filterElements(arr: any[], fnRef: (arg: any) => boolean) {

}
filterElements(['anil', 'sunil'], (num: number) => num % 2 == 0)

function filterValues<T>(arr: T[], fnRef: (arg: T) => boolean) {

}
filterValues<number>([1, 2, 3, 4, 5, 6], (num) => num % 2 == 0)