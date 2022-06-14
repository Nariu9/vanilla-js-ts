export const userObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

/*type UsersType = {
    [key: string]: {id: number, name: string}
}

const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}*/
//users[1] - моментально быстро достаем объект с id 1, сложность алгоритма О(1)

/*let user = {id: 100500, name: 'Igor'}
users[user.id.toString()] = user    //добавляем в ассоциативный массив users объект user, ключом выступает его id преобразованная в строку '100500'

users[user.id] = user   //.toString() применяется автоматически, если пользователь с таким id уже был, он перезатрётся, дубликатов не будет

delete users[user.id] //удалить user по id моментально быстро, затирается ячейка памяти, зачищается ссылка на указатель на память

users[user.id].name = 'Viktor' // обновляем user*/




export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}
]
//usersArray.find(u => u.id === 1) - достаём тот же объект, но сложность алгоритма уже О(n), где n - длинна массива

//usersArray.push(user) //мутабельное добавление, если разрешается мутировать изначальный массив; если такой user уже был, будет дубликат

//let usersArrayCopy = [...usersArray.filter(u=> u.id !== user.id), user] иммутабельное добавление, чтобы не было дубликата нужно пробежаться find'ом по массиву, сложность алгоритма выше

//let users = usersArray.filter(u=> u.id !== user.id) //для удаления нужно снова пробегать find'ом и сохранять в массив только тех user, чьи id отличаются от user.id, сложность алгоритма О(n)

// для обновления user мутабельно, нужно искать его find'ом, а иммутабельно map'ом