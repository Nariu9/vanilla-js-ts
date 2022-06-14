import {userObj} from "./08_01";

type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType

beforeEach( ()=> {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '3232312': {id: 3232312, name: 'Natasha'},
        '1212': {id: 1212, name: 'Valera'},
        '1': {id: 1, name: 'Katya'}
    }
})

test('should select corresponding user from object', () => {
    expect(userObj[0]).toBe('Dimych')
    expect(userObj[1]).toBe('Natasha')
    expect(userObj[2]).toBe('Valera')
    expect(userObj[3]).toBe('Katya')
})

test('should update corresponding user from object', () => {

    users['1'].name = 'Ekaterina'

    expect(users['1'].name).toBe('Ekaterina')
    expect(users['1']).toEqual({id: 1, name: 'Ekaterina'})
})

test('should delete corresponding user from object', () => {

    delete users['1']


    expect(users['1']).toBeUndefined()
})