//asign()
const redObj = {
    color: 'red'
}
const yellowObj = Object.assign({}, redObj, {
    color: 'yellow'
})

console.log(yellowObj)

//concat(), ...
const arr = [1, 2]
const arr2 = [1, 2].concat(3)
const arr3 = [...arr, 3]
console.log(arr2)
console.log(arr3)

//filter()
const d = arr.filter((v, k) => k < 1)
console.log(d)