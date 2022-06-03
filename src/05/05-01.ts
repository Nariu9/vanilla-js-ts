export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alex Markov', age: 43},
    {name: 'Inna Vasiljeva', age: 18}
]

const dimychTrasformator = (man: ManType) => ({         //для возврата объекта по укроченному синтаксису, оборачиваем его в (), чтобы интерпретатор не путался
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],  // разделяем строку до пробела, получаем массив, где [0] - имя
    lastName: man.name.split(' ')[1],   // разделяем строку до пробела, получаем массив, где [1] - фамилия
})

const devs1 = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Andrew', lastName: 'Ivanov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alex', lastName: 'Markov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Inna', lastName: 'Vasiljeva'
    }
]

let d1 = dimychTrasformator(people[0])
let d2 = dimychTrasformator(people[1])
let d3 = dimychTrasformator(people[2])

const devs2 = [
    /* d1, d2, d3*/
    /*dimychTrasformator(people[0]),
    dimychTrasformator(people[1]),
    dimychTrasformator(people[2]),*/
]

const devs3 = people.map(dimychTrasformator)
const devs4 = people.map(man => ({         //для возврата объекта по укроченному синтаксису, оборачиваем его в (), чтобы интерпретатор не путался
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
}))

const messages = people.map(man => `Hello ${man.name.split(' ')[0]} and welcome!`)

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]} and welcome!`)
}