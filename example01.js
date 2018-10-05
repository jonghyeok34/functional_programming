const f = (m) => console.log(m)
f('Test')

const obj = {
    f(m){
        console.log(m)
    }
}
obj.f('Test')

const a =[
    m => console.log(m)
]
a[0]('Test')

const f_ = (m) => () => console.log(m)
const f_2 = (f3) =>f3()

f_2(f_('Test'))


const createF = () => {
    return (m) => console.log(m)
}

const cf = createF()

cf('Test')