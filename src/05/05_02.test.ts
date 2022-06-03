import {CityType} from "../02/02_02";
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05_02";


let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            id: 1, buildedAt: 2012,
            repaired: false,
            address: {number: 100, street: {title: "White street"}}
        },
            {
                id: 2, buildedAt: 2008,
                repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                id: 3, buildedAt: 2020,
                repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            }],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {street: {title: "Central Str"}}
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {street: {title: "South Str"}}
            }
        ],
        citizensNumber: 1000000
    }
})

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles of government buildings', ()=> {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");
})

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Happy street");
})

test('create greeting messages for streets', ()=> {
    let messages = createMessages(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello guys from White street')
    expect(messages[1]).toBe('Hello guys from Happy street')
    expect(messages[2]).toBe('Hello guys from Happy street')
})
