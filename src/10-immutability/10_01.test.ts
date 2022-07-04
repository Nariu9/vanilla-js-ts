import {
    addCompany,
    addNewBooksToUser,
    changeHouse,
    makeHairstyle,
    moveUser, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeLaptop,
    UserType,
    UserWithBooks,
    UserWithLaptop, WithCompaniesType
} from "./10_01";


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'SomeCity',
            house: 12
        }
    }

    const someUser = makeHairstyle(user, 2)

    expect(someUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(someUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptop = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'SomeCity',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'newCity')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('newCity')
})

test('upgrade user laptop', () => {
    let user: UserWithLaptop = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'SomeCity',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const upgradedUser = upgradeLaptop(user, 'Macbook')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).not.toBe(upgradedUser.laptop)
    expect(upgradedUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('move to other house', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'SomeCity',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = changeHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'SomeCity',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books.length).toBe(6)
    expect(userCopy.books[5]).toBe('rest api')
})

test('update book', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'SomeCity',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove js book', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'SomeCity',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})

test('add company', () => {
    let user: UserWithLaptop & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'SomeCity',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
       companies: [
           {id: 1, title: 'EPAM'},
           {id: 2, title: 'IT-INCUBATOR'}
       ]
    }

    const userCopy = addCompany(user, {id: 3, title: 'Google'})

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.companies[2].title).toBe('Google')
})

test('update company title', () => {
    let user: UserWithLaptop & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'SomeCity',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'EPAM'},
            {id: 2, title: 'IT-INCUBATOR'}
        ]
    }

    const userCopy = updateCompanyTitle(user, 1, 'Meta') as UserWithLaptop & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('Meta')
})

test('update company', () => {

    let companies = {
        'Dimych': [
            {id: 1, title: 'EPAM'},
            {id: 2, title: 'IT-INCUBATOR'}
        ],
        'Artem': [
            {id: 2, title: 'IT-INCUBATOR'}
        ]
    }

    const companiesCopy = updateCompanyTitle2(companies, 'Dimych', 1, 'Meta')

    expect(companiesCopy['Dimych']).not.toBe(companies["Dimych"])
    expect(companiesCopy['Artem']).toBe(companies["Artem"])
    expect(companiesCopy['Dimych'][0].title).toBe('Meta')
})