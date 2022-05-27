import {StudentType} from "../02/02";
import {addSkill, makeStudentActive, whereStudentLive} from "./03";

let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        name: "Artem",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Central Str",
            city: {
                title: "Maison",
                countryTitle: "Uran"
            }
        },
        technologies: [
            {id: 1, title: "HTML"},
            {id: 2, title: "CSS"},
            {id: 3, title: "React"},

        ]
    }
})

test('new tech skill should be added to students', () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, 'JS');

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
})

test('does student lives in the city?', () => {
    let result1 = whereStudentLive(student, 'Istanbul')
    let result2 = whereStudentLive(student, 'Maison')

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})

