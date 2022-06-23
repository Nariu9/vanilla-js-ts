function inreaceAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: {title:string}
}

test('reference type test', () => {
    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'RandomCity'
        }
    }

    inreaceAge(user)

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array reference test', () => {
    const users = [
        {
            name: 'Dimych',
            age: 32,
        },
        {
            name: 'Ann',
            age: 30
        }
    ]

    const admins = users

    admins.push({name: 'Pablo', age: 10})

    expect(users[2]).toEqual({name: 'Pablo', age: 10})

})

test('value type test', () => {
    const usersCount = 100

    let adminsCount = usersCount

    adminsCount = adminsCount+1

    expect(adminsCount).toBe(101)

})

test('reference type object test', () => {

    const address = {
        title: 'RandomCity'
    }

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    let addr = user.address
    const user2: UserType = {
        name: "Natasha",
        age: 30,
        address: address
    }

    address.title = 'NewYork'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('NewYork')
})

test('reference type array test', () => {

    const address = {
        title: 'RandomCity'
    }

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }
    const user2: UserType = {
        name: "Natasha",
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Katya', age: 18, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmytri'

    address.title = 'NewYork'

    expect(users[0].name).toBe('Dmytri')
    expect(user.name).toBe('Dmytri')
})

test('sort array test', ()=> {
    const letters = ['c', 'd', 'a', 'b', 'f']

    registration(letters)

    expect(letters).toEqual(['c', 'd', 'a', 'b', 'f'])
})

function registration(letters:any) {
    const copy = [...letters].sort()
    console.log(copy)
}