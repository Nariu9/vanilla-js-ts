import {createGreetingMessage, ManType} from "./05-01";

let people: Array<ManType> = []

beforeEach(()=> {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alex Markov', age: 43},
        {name: 'Inna Vasiljeva', age: 18}
    ]
})

test('should return array of greetings messages', ()=> {

    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrew and welcome!')
    expect(messages[1]).toBe('Hello Alex and welcome!')
    expect(messages[2]).toBe('Hello Inna and welcome!')

})