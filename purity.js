//array.map

const a = [1, 2, 3]
const b = a.map((v, k) => v * k)

console.log(b)

//array.reduce() : array를 하나의 타입으로 변환

const a2 = [1, 2, 3]
const sum = a2.reduce((partial, v) => partial + v, 0)
console.log(sum)

const o = a2.reduce((obj, k) => {obj[k] = k; return obj},{})
console.log(o)